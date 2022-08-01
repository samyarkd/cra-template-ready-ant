import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { antdConfig } from "./antd.config";
import RouteHandler from "./RouteHandler";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider {...antdConfig}>
        <RouteHandler />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
