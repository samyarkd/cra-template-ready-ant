import { CopyOutlined } from "@ant-design/icons";
import React from "react";
import routes from "~react-pages";
const Routes = routes[2];

interface Route {
  icon: React.ElementType;
  label: string;
  path: string;
}

export const menuRoutes: Route[] = [
  {
    icon: CopyOutlined,
    label: "لیست قرارداد های من",
    path: "contracts",
  },
];
