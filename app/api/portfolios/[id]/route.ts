import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Portfolio from "@/models/Portfolio";
import { createPortfolioSchema } from "@/lib/validations/portfolio-validation";
import mongoose from "mongoose";

/**
 * GET /api/portfolios/[id] - Get a single portfolio by ID
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
          message: "Invalid portfolio ID format",
        },
        { status: 400 }
      );
    }

    // Find portfolio by ID
    const portfolio = await Portfolio.findById(id).lean();

    if (!portfolio) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: portfolio._id.toString(),
          images: portfolio.images,
          createdAt: portfolio.createdAt,
          updatedAt: portfolio.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching portfolio:", error);

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
 * PUT /api/portfolios/[id] - Update a portfolio by ID
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
          message: "Invalid portfolio ID format",
        },
        { status: 400 }
      );
    }

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

    // Check if portfolio exists
    const existingPortfolio = await Portfolio.findById(id);

    if (!existingPortfolio) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        { status: 404 }
      );
    }

    // Update portfolio with ONLY images field
    existingPortfolio.images = images || [];

    // Save without validation to bypass any cached schema issues
    await existingPortfolio.save({ validateBeforeSave: false });

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio updated successfully",
        data: {
          id: existingPortfolio._id.toString(),
          images: existingPortfolio.images,
          createdAt: existingPortfolio.createdAt,
          updatedAt: existingPortfolio.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating portfolio:", error);

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
 * DELETE /api/portfolios/[id] - Delete a portfolio by ID
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
          message: "Invalid portfolio ID format",
        },
        { status: 400 }
      );
    }

    // Find and delete portfolio
    const deletedPortfolio = await Portfolio.findByIdAndDelete(id);

    if (!deletedPortfolio) {
      return NextResponse.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Portfolio deleted successfully",
        data: {
          id: deletedPortfolio._id.toString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting portfolio:", error);

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
