import React from 'react';
import Banner from "../layout/Banner";
import CardGrid from "../components/CardGrid.jsx";
import "../pages/HomePage.scss";


function HomePage() {
  return (
    <>
    <Banner />
    <CardGrid />
    </>
  );
}

export default HomePage;