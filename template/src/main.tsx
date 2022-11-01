// React
import React from "react";
import ReactDOM from "react-dom/client";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// Ant Design 🐜
import "@/less/main.less";
import { ConfigProvider } from "antd";
import { antdConfig } from "./antd.config";

// App
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ConfigProvider {...antdConfig}>
          <App />
        </ConfigProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
