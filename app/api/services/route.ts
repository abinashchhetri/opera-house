import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Service from "@/models/Service";
import { createServiceSchema } from "@/lib/validations/service-validation";

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = createServiceSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { title, description, features, imageUrl } = validationResult.data;

    // Check if service with same title already exists
    const existingService = await Service.findOne({ title });

    if (existingService) {
      return NextResponse.json(
        {
          success: false,
          message: "Service with this title already exists",
        },
        { status: 409 }
      );
    }

    // Create new service
    const newService = new Service({
      title,
      description,
      features,
      imageUrl: imageUrl || undefined,
    });

    await newService.save();

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully",
        data: {
          id: newService._id.toString(),
          title: newService.title,
          description: newService.description,
          features: newService.features,
          imageUrl: newService.imageUrl,
          createdAt: newService.createdAt,
          updatedAt: newService.updatedAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating service:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Fetch services with pagination
    const services = await Service.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Service.countDocuments();

    return NextResponse.json(
      {
        success: true,
        data: services.map((service) => ({
          id: service._id.toString(),
          title: service.title,
          description: service.description,
          features: service.features,
          imageUrl: service.imageUrl,
          createdAt: service.createdAt,
          updatedAt: service.updatedAt,
        })),
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching services:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
