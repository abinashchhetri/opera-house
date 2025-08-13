import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO, NAVIGATION_ITEMS, SERVICES } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-muted-foreground">{COMPANY_INFO.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <Link
                  key={service.id}
                  href={`/products#${service.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</div>
                  <div className="text-muted-foreground">Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Established{" "}
            {COMPANY_INFO.establishedYear}.
          </p>
        </div>
      </div>
    </footer>
  )
}
