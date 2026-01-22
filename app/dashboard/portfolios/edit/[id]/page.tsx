"use client";

import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { AddPortfolioForm } from "@/components/dashboard/portfolios/add-portfolio-form";

export default function EditPortfolioPage() {
  const router = useRouter();
  const params = useParams();
  const portfolioId = params.id as string;

  const handleSuccess = () => {
    router.push("/dashboard/portfolios");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Portfolio</h1>
          <p className="text-muted-foreground">
            Update the portfolio project information below
          </p>
        </div>
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Details</CardTitle>
          <CardDescription>
            Update the information below to modify the portfolio project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddPortfolioForm
            portfolioId={portfolioId}
            onSuccess={handleSuccess}
          />
        </CardContent>
      </Card>
    </div>
  );
}
