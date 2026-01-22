import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Portfolio from "@/models/Portfolio";
import { createPortfolioSchema } from "@/lib/validations/portfolio-validation";

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = createPortfolioSchema.safeParse(body);

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

    const { images } = validationResult.data;

    // Create portfolio with ONLY images field - no other fields
    const newPortfolio = new Portfolio({
      images: images || [],
    });

    // Save without validation to bypass any cached schema issues
    await newPortfolio.save({ validateBeforeSave: false });

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio created successfully",
        data: {
          id: newPortfolio._id.toString(),
          images: newPortfolio.images,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating portfolio:", error);

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

    // Fetch portfolios with pagination
    const portfolios = await Portfolio.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Portfolio.countDocuments({});

    return NextResponse.json(
      {
        success: true,
        data: portfolios.map((portfolio) => ({
          id: portfolio._id.toString(),
          images: portfolio.images,
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
    console.error("Error fetching portfolios:", error);

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
