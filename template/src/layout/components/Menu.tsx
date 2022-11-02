import { usePanelRoutes } from "@/hooks/usePanelRoutes";
import { Menu } from "antd";
import { MenuProps } from "rc-menu";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppMenu = ({ theme = "dark" }: { theme?: "light" | "dark" }) => {
  const navigate = useNavigate();
  const menuRoutes = usePanelRoutes();

  const items: MenuProps["items"] = menuRoutes.routes.map((route) => {
    return {
      key: route.path,
      icon: React.createElement(route.icon),
      label: <span className="typo-body">{route.label}</span>,
      onClick: () => navigate(route.path),
    };
  });

  return (
    <Menu
      theme={theme}
      mode="vertical"
      items={items}
      activeKey={menuRoutes.activeRoute.path}
      selectedKeys={[menuRoutes.activeRoute.path]}
    />
  );
};

export default AppMenu;
