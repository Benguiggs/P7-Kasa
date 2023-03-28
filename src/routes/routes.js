import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import ApartmentPage from "../pages/ApartmentPage";

const HeaderFooterLayout= () => {
  return<>
  <Navbar />
  <Main>
  <Outlet />
  </Main>
  <Footer />
  </>
}

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
  errorElement: <h1>Erreur 404</h1>,
  children: [ 
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/appartement",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <h1>A propos</h1>
      }
      ]
      },
]);

export default router;