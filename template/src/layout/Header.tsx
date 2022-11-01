import { useStore } from "@/store/store";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";

const { Header } = Layout;

const AppHeader = () => {
  const { collapsed, toggle } = useStore();

  return (
    <Header className="header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        onClick: toggle,
      })}
    </Header>
  );
};

export default AppHeader;
