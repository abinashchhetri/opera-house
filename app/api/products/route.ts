import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Product from "@/models/Product";
import { createProductSchema } from "@/lib/validations/product-validation";

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

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

    // Check if product with same name already exists
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return NextResponse.json(
        {
          success: false,
          message: "Product with this name already exists",
        },
        { status: 409 }
      );
    }

    // Create new product
    // Filter out undefined values from specifications
    const cleanSpecifications: Record<string, string> = specifications
      ? (Object.fromEntries(
          Object.entries(specifications).filter(
            ([_, value]) => value !== undefined
          )
        ) as Record<string, string>)
      : {};
    const newProduct = new Product({
      name,
      category: category || undefined,
      description,
      price: price || undefined,
      features,
      specifications: cleanSpecifications,
      images: images || [],
      imageUrl: imageUrl || undefined,
    });

    await newProduct.save();

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        data: {
          id: newProduct._id.toString(),
          name: newProduct.name,
          category: newProduct.category,
          description: newProduct.description,
          price: newProduct.price,
          features: newProduct.features,
          specifications: newProduct.specifications || {},
          images: newProduct.images,
          imageUrl: newProduct.imageUrl,
          createdAt: newProduct.createdAt,
          updatedAt: newProduct.updatedAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);

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
    const category = searchParams.get("category");

    // Build query
    const query: any = {};
    if (category) {
      query.category = category;
    }

    // Fetch products with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    return NextResponse.json(
      {
        success: true,
        data: products.map((product) => ({
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
    console.error("Error fetching products:", error);

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
