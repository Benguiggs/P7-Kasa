import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Navbar from "./Navbar";
import Footer from "../Layout/Footer";
import Main from "../Layout/Main";

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
        element: <App />
      },
      {
        path: "/appartement",
        element: <h1>Nos appartements</h1>
      },
      {
        path: "/about",
        element: <h1>A propos</h1>
      }
      ]
      },
]);

export default router;