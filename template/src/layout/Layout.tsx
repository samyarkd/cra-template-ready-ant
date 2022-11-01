import { Layout } from "antd";
import AppHeader from "./Header";

import Sidebar from "./Sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="layout">
      <Sidebar />
      <Layout>
        <AppHeader />
        {children}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
