import { Layout } from "antd";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const AppLayout = () => {
  return (
    <Layout hasSider className="layout">
      <AppSidebar />
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
