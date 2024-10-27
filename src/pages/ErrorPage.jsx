import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero bg-lightGray min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="display">404</h1>
                    <p className="py-4">This is error page</p>
                    <Link to="/" className="btn--primary">Back To Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
