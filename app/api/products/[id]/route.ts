import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Product from "@/models/Product";
import { createProductSchema } from "@/lib/validations/product-validation";
import mongoose from "mongoose";

/**
 * GET /api/products/[id] - Get a single product by ID
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
          message: "Invalid product ID format",
        },
        { status: 400 }
      );
    }

    // Find product by ID
    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: product._id.toString(),
          name: product.name,
          category: product.category,
          description: product.description,
          price: product.price,
          features: product.features,
          specifications: product.specifications || {},
          images: product.images,
          imageUrl: product.imageUrl,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching product:", error);

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
 * PUT /api/products/[id] - Update a product by ID
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
          message: "Invalid product ID format",
        },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = createProductSchema.safeParse(body);

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

    const {
      name,
      category,
      description,
      price,
      features,
      specifications,
      images,
      imageUrl,
    } = validationResult.data;

    // Check if product exists
    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    // Check if another product with the same name exists (excluding current product)
    const duplicateProduct = await Product.findOne({
      name,
      _id: { $ne: id },
    });

    if (duplicateProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Product with this name already exists",
        },
        { status: 409 }
      );
    }

    // Update product
    existingProduct.name = name;
    existingProduct.category = category || undefined;
    existingProduct.description = description;
    existingProduct.price = price || undefined;
    existingProduct.features = features;
    // Filter out undefined values from specifications
    const cleanSpecifications: Record<string, string> = specifications
      ? (Object.fromEntries(
          Object.entries(specifications).filter(
            ([_, value]) => value !== undefined
          )
        ) as Record<string, string>)
      : {};
    existingProduct.specifications = cleanSpecifications;
    existingProduct.images = images || [];
    existingProduct.imageUrl = imageUrl || undefined;

    await existingProduct.save();

    return NextResponse.json(
      {
        success: true,
        message: "Product updated successfully",
        data: {
          id: existingProduct._id.toString(),
          name: existingProduct.name,
          category: existingProduct.category,
          description: existingProduct.description,
          price: existingProduct.price,
          features: existingProduct.features,
          specifications: existingProduct.specifications || {},
          images: existingProduct.images,
          imageUrl: existingProduct.imageUrl,
          createdAt: existingProduct.createdAt,
          updatedAt: existingProduct.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);

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
 * DELETE /api/products/[id] - Delete a product by ID
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
          message: "Invalid product ID format",
        },
        { status: 400 }
      );
    }

    // Find and delete product
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Product deleted successfully",
        data: {
          id: deletedProduct._id.toString(),
          name: deletedProduct.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);

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
