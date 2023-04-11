import Error from "../../pages/Error/ErrorPage";
import Home from "../../pages/Home/HomePage";
import Apartment from "../../pages/Apartment/ApartmentPage";
import About from "../../pages/About/About";
import datas from "../../assets/datas/DataBase.json";

import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
        <Routes>
            <Route path = "/" element={<Home datas={datas} />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/apartment/:id" element={<Apartment datas={datas} />} />
            <Route path = "/*" element={<Error />} />

            </Routes>
        </>
    );
}