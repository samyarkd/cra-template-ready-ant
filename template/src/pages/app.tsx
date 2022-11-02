import AppLoading from "@/components/AppLoading";
import { usePanelRoutes } from "@/hooks/usePanelRoutes";
import AppLayout from "@/layout/Layout";
import { Breadcrumb } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router";

const app = () => {
  const activeRoute = usePanelRoutes().activeRoute;

  return (
    <AppLayout>
      <Suspense fallback={<AppLoading />}>
        <div className="xs-pt-10 xs-pl-20 xs-pr-20 xs-pb-10">
          <Breadcrumb className="xs-mb-10">
            {activeRoute.breadTree.map((label, idx) => {
              return <Breadcrumb.Item key={idx}>{label}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <Outlet />
        </div>
      </Suspense>
    </AppLayout>
  );
};

export default app;
