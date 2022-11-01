import AppLoading from "@/components/AppLoading";
import AppLayout from "@/layout/Layout";
import { Suspense } from "react";
import { Outlet } from "react-router";

const panel = () => {
  return (
    <AppLayout>
      <Suspense fallback={<AppLoading />}>
        <div className="xs-p-30">
          <Outlet />
        </div>
      </Suspense>
    </AppLayout>
  );
};

export default panel;
