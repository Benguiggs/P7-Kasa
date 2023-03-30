import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage"

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
  errorElement: <ErrorPage />,
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
        element: <About />
      }
      ]
      },
]);

export default router;