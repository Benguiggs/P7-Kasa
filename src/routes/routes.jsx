import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage"


export const router = createBrowserRouter([
  {
  
  errorElement: <ErrorPage />,
  children: [ 
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/apartement",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      }
      ]
      },
]);

export default router;