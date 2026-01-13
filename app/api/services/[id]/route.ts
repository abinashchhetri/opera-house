import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Service from "@/models/Service";
import { createServiceSchema } from "@/lib/validations/service-validation";
import mongoose from "mongoose";

/**
 * GET /api/services/[id] - Get a single service by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service ID format",
        },
        { status: 400 }
      );
    }

    // Find service by ID
    const service = await Service.findById(id).lean();

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: service._id.toString(),
          title: service.title,
          description: service.description,
          features: service.features,
          imageUrl: service.imageUrl,
          createdAt: service.createdAt,
          updatedAt: service.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching service:", error);

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

/**
 * PUT /api/services/[id] - Update a service by ID
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service ID format",
        },
        { status: 400 }
      );
    }

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

    // Check if service exists
    const existingService = await Service.findById(id);

    if (!existingService) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 }
      );
    }

    // Check if another service with the same title exists (excluding current service)
    const duplicateService = await Service.findOne({
      title,
      _id: { $ne: id },
    });

    if (duplicateService) {
      return NextResponse.json(
        {
          success: false,
          message: "Service with this title already exists",
        },
        { status: 409 }
      );
    }

    // Update service
    existingService.title = title;
    existingService.description = description;
    existingService.features = features;
    existingService.imageUrl = imageUrl || undefined;

    await existingService.save();

    return NextResponse.json(
      {
        success: true,
        message: "Service updated successfully",
        data: {
          id: existingService._id.toString(),
          title: existingService.title,
          description: existingService.description,
          features: existingService.features,
          imageUrl: existingService.imageUrl,
          createdAt: existingService.createdAt,
          updatedAt: existingService.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating service:", error);

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

/**
 * DELETE /api/services/[id] - Delete a service by ID
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Connect to database
    await connectDB();

    const { id } = await params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service ID format",
        },
        { status: 400 }
      );
    }

    // Find and delete service
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Service deleted successfully",
        data: {
          id: deletedService._id.toString(),
          title: deletedService.title,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting service:", error);

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
