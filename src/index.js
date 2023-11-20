import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import Home from "./Home"
import "./styles.css";


const router = createBrowserRouter([
  {
    path: "Web_Dev_assignment5/",
    element: <Home/>,
  }
  ]
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);