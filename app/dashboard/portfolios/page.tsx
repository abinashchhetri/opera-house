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
import { Plus, FolderKanban } from "lucide-react";
import { PortfoliosList } from "@/components/dashboard/portfolios/portfolios-list";


export default function PortfoliosPage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePortfolioAdded = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolios</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects and showcase your work
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/portfolios/add">
            <Plus className="mr-2 h-4 w-4" />
            Add Portfolio
          </Link>
        </Button>
      </div>

      {/* Portfolios List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            All Portfolios
          </CardTitle>
          <CardDescription>
            View and manage all your portfolio projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PortfoliosList key={refreshKey} />
        </CardContent>
      </Card>
    </div>
  );
}
