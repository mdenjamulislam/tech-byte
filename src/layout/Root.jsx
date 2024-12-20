import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <>
            <Header />
            <main className="-mt-14">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;