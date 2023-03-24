import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import CardGrid from "./components/CardGrid.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";


function App() {
  return (
    <>
    <Navbar />
    <Main>
    <Banner />
    <CardGrid />
    </Main>
    <Footer />
    </>
  );
}

export default App;