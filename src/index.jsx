import React from "react";

import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import queryClient from "utils/queryClient";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
