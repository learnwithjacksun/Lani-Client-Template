import {
  UserCog,
  LayoutDashboard,
  PackagePlus,
  Utensils,
  Clock,
  Bike,
  Truck,
} from "lucide-react";

export const slides = [
  {
    image: "/tracking.svg",
    title: "Track Your Shipments",
    description: "Real-time tracking of all your deliveries",
  },
  {
    image: "/delivery.svg",
    title: "Fast Delivery",
    description: "Quick and reliable logistics solutions",
  },
  {
    image: "/food.svg",
    title: "Food Delivery",
    description: "Order a quick snack from your favorite restaurants",
  },
];

export const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Create Order",
    path: "/order/create",
    icon: PackagePlus,
  },
  {
    label: "Food",
    path: "https://food.lani.ng",
    icon: Utensils,
  },
  {
    label: "History",
    path: "/order/all",
    icon: Clock,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserCog,
  },
];

export const actions = [
  {
    label: "Same State Delivery",
    path: "/order/same-state",
    icon: Bike,
  },
  {
    label: "Inter State Delivery",
    path: "/order/inter-state",
    icon: Truck,
  },
  {
    label: "Food Delivery",
    path: "https://food.lani.ng",
    icon: Utensils,
  },
];
