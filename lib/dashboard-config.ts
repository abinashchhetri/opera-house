import type { DashboardNavGroup } from "./types";

export const DASHBOARD_NAV_GROUPS: DashboardNavGroup[] = [
  {
    id: "main",
    label: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/dashboard",
        icon: "LayoutDashboard",
      },
      {
        id: "analytics",
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: "BarChart3",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    items: [
      {
        id: "products",
        label: "Products",
        href: "/dashboard/products",
        icon: "Package",
        badge: "12",
      },
      {
        id: "projects",
        label: "Projects",
        href: "/dashboard/projects",
        icon: "FolderKanban",
        badge: "8",
      },
      {
        id: "services",
        label: "Services",
        href: "/dashboard/services",
        icon: "Wrench",
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    items: [
      {
        id: "orders",
        label: "Orders",
        href: "/dashboard/orders",
        icon: "ShoppingCart",
        badge: "5",
      },
      {
        id: "contacts",
        label: "Contacts",
        href: "/dashboard/contacts",
        icon: "Users",
        badge: "23",
      },
      {
        id: "testimonials",
        label: "Testimonials",
        href: "/dashboard/testimonials",
        icon: "MessageSquare",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    items: [
      {
        id: "settings",
        label: "Settings",
        href: "/dashboard/settings",
        icon: "Settings",
      },
      {
        id: "users",
        label: "Users",
        href: "/dashboard/users",
        icon: "UserCog",
      },
    ],
  },
];
