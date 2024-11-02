import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Product from "../Product";

const PopularProducts = ({ products }) => {
    return (
        <section className="section--padding">
            <div className="container">
                {/* section heaing */}
                <div className="flex items-center justify-between gap-2">
                    <h2 className="heading--two">Most Popular</h2>
                    <div className="w-1/2 border-2 border-lightGray"></div>
                    <Link className="btn--light">
                        <span>See All</span>
                        <MdKeyboardDoubleArrowRight />
                    </Link>
                </div>

                {/* product */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                    {products.map((product) => (
                        <Product product={product}></Product>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
