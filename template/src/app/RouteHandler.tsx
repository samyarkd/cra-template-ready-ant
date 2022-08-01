import AppLayout from "layouts/AppLayout";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const RouteHandler = () => {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Element />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default RouteHandler;
