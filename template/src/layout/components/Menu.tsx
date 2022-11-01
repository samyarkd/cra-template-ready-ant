import { Menu } from "antd";
import { MenuProps } from "rc-menu";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";

const AppMenu = ({ theme = "dark" }: { theme: "light" | "dark" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuProps["items"] = menuRoutes.map((route) => {
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
      activeKey={location.pathname.split("/")[2]}
      selectedKeys={[location.pathname.split("/")[2]]}
    />
  );
};

export default AppMenu;
