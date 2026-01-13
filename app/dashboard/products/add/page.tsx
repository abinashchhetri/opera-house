"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { AddProductForm } from "@/components/dashboard/products/add-product-form";

export default function AddProductPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/dashboard/products");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
          <p className="text-muted-foreground">
            Create a new product with name, description, features, and images
          </p>
        </div>
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Fill in the information below to create a new product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddProductForm onSuccess={handleSuccess} />
        </CardContent>
      </Card>
    </div>
  );
}
