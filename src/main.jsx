/* eslint-disable comma-dangle */
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import Home from "./components/Home";
import UpdateCoffee from "./components/UpdateCoffee";
import "./index.css";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("https://coffee-store-server-abdullah149081.vercel.app/follow") },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "update/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://coffee-store-server-abdullah149081.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
