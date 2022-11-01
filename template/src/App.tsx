import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "~react-pages";
import LayoutLoading from "./components/LayoutLoading";

function App() {
  return <Suspense fallback={<LayoutLoading />}>{useRoutes(routes)}</Suspense>;
}

export default App;
