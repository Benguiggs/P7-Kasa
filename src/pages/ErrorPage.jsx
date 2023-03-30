import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main"
import "../pages/ErrorPage.scss";


export function ErrorPage() {
  return (
    <>
  <Navbar />
  <Main>
    <div className='Error__page'>
  <h1>404</h1>
  <h2>Ooops! La page que vous demandez n'existe pas</h2>
  <Link to="/">Retourner sur la page d'accueil</Link>
  </div>
  </Main>
  </>
  );
}

