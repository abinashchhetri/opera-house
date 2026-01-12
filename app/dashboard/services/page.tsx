"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Wrench } from "lucide-react";
import { ServicesList } from "@/components/dashboard/services/services-list";

export default function ServicesPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleServiceAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">
            Manage your services and offerings
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/services/add">
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Link>
        </Button>
      </div>

      {/* Services List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            All Services
          </CardTitle>
          <CardDescription>View and manage all your services</CardDescription>
        </CardHeader>
        <CardContent>
          <ServicesList key={refreshKey} />
        </CardContent>
      </Card>
    </div>
  );
}
