import React from "react";
import Header from "../features/Header";
import Footer from "../features/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div>
            <Header  />
            <Outlet />
            <Footer />
        </div>
    )
}