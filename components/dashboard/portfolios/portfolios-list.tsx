"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPortfolios, deletePortfolio } from "@/lib/api/portfolios";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  AlertCircle,
  Image as ImageIcon,
 
  Trash2,
  Loader2,
  Calendar,
  MapPin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { ProjectPortfolio } from "@/lib/types";

export function PortfoliosList() {
  const router = useRouter();
  const { toast } = useToast();
  const [portfolios, setPortfolios] = useState<ProjectPortfolio[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [portfolioToDelete, setPortfolioToDelete] =
    useState<ProjectPortfolio | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getPortfolios(1, 50);
      if (response.success) {
        setPortfolios(response.data);
      } else {
        setError("Failed to fetch portfolios");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (portfolio: ProjectPortfolio) => {
    router.push(`/dashboard/portfolios/edit/${portfolio.id}`);
  };

  const handleDeleteClick = (portfolio: ProjectPortfolio) => {
    setPortfolioToDelete(portfolio);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!portfolioToDelete) return;

    try {
      setIsDeleting(true);
      const response = await deletePortfolio(portfolioToDelete.id);

      if (response.success) {
        toast({
          title: "Portfolio Deleted",
          description: `Portfolio has been deleted successfully.`,
        });
        await fetchPortfolios();
        setDeleteDialogOpen(false);
        setPortfolioToDelete(null);
      } else {
        toast({
          title: "Delete Failed",
          description: response.message || "Failed to delete portfolio",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Delete Failed",
        description:
          err instanceof Error ? err.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Skeleton className="h-24 w-24 rounded-md" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (portfolios.length === 0) {
    return (
      <div className="text-center py-12">
        <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Portfolios Found</h3>
        <p className="text-muted-foreground mb-4">
          Get started by creating your first portfolio project.
        </p>
        <Button onClick={() => router.push("/dashboard/portfolios/add")}>
          <ImageIcon className="mr-2 h-4 w-4" />
          Add Portfolio
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {portfolios.map((portfolio) => (
          <Card
            key={portfolio.id}
            className="hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                {/* Thumbnail Image */}
                <div className="relative h-24 w-24 rounded-md overflow-hidden border flex-shrink-0">
                  {portfolio.images && portfolio.images.length > 0 ? (
                    <img
                      src={portfolio.images[0]}
                      alt={`Portfolio ${portfolio.id.slice(-6)}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  {portfolio.images && portfolio.images.length > 1 && (
                    <div className="absolute bottom-1 right-1 bg-background/90 text-xs px-1.5 py-0.5 rounded">
                      +{portfolio.images.length - 1}
                    </div>
                  )}
                </div>

                {/* Portfolio Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1">
                        Portfolio #{portfolio.id.slice(-6)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {portfolio.images?.length || 0} image
                        {portfolio.images?.length !== 1 ? "s" : ""}
                      </p>
                      {portfolio.createdAt && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(portfolio.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                   
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteClick(portfolio)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Portfolio</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this portfolio? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
