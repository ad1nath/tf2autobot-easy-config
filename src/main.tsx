import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import { Analytics } from "@vercel/analytics/react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Render the app
const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Analytics />
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
