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
import { AddServiceForm } from "@/components/dashboard/services/add-service-form";

export default function AddServicePage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/dashboard/services");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Service</h1>
          <p className="text-muted-foreground">
            Create a new service with title, description, features, and image
          </p>
        </div>
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Service Details</CardTitle>
          <CardDescription>
            Fill in the information below to create a new service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddServiceForm onSuccess={handleSuccess} />
        </CardContent>
      </Card>
    </div>
  );
}
