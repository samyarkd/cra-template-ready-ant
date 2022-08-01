import { Menu, MenuProps } from "antd";
import { routes } from "app/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

function AppMenu() {
  const navigate = useNavigate();
  const items: MenuProps["items"] = routes.map((route) => {
    return {
      key: route.path,
      icon: React.createElement(route.icon),
      label: route.title,
      onClick: () => navigate(route.path),
    };
  });

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={items}
    />
  );
}

export default AppMenu;
