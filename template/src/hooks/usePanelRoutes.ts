import Lang from "@/lang/langs";
import { Route } from "@/types/hooks/usePanelRoutes";
import { CopyOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const routes: Route[] = [
  {
    icon: CopyOutlined,
    label: Lang.routes.default.myContracts,
    breadTree: [Lang.routes.default.myContracts],
    path: "contracts",
    children: [
      {
        icon: EditOutlined,
        label: "",
        breadTree: [
          Lang.routes.default.myContracts,
          Lang.routes.default.editContract,
        ],
        path: "edit",
      },
    ],
  },
];

const edgeKeys = ["edit"];

export function usePanelRoutes() {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  let lastKeyPath = pathnames[pathnames.length - 1];
  for (const path of pathnames) {
    const exceptionResult = edgeKeys.includes(path);
    if (exceptionResult) {
      lastKeyPath = path;
    }
  }

  const [activeRoute, setActiveRoute] = useState<Route>(routes[0]);

  function setActivePath(routes: Route[] | undefined) {
    if (routes) {
      routes.every((route) => {
        if (route.path === lastKeyPath) {
          setActiveRoute(route);
          return false;
        } else {
          setActivePath(route.children);
          return false;
        }

        return true;
      });
    }
  }

  useEffect(() => {
    setActivePath(routes);
  }, [location]);

  return {
    routes,
    activeRoute,
  };
}
