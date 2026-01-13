import type { DashboardNavGroup } from "./types";

export const DASHBOARD_NAV_GROUPS: DashboardNavGroup[] = [

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

];
