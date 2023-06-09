import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/routes/App";
import "./sass/Main.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <main>
                <App />
            </main>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);