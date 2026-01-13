import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ServicesGrid } from "./_components/services-grid";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Services - ${COMPANY_INFO.name}`,
  description: `Explore our comprehensive range of ${COMPANY_INFO.name} services including UPVC and aluminum solutions.`,
};

export default function ServicesPage() {
  return (
    <section className=" py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Services
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary">
            Premium UPVC & Aluminum Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in high-quality UPVC and aluminum fabrication
            services, delivering durable and aesthetically pleasing solutions
            for residential and commercial projects.
          </p>
        </div>

        <ServicesGrid />
      </div>
    </section>
  );
}
