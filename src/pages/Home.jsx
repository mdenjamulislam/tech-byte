import React from 'react';
import Hero from '../components/Home/Hero';
import { useLoaderData } from 'react-router-dom';
import PopularProducts from '../components/Home/PopularProducts';

const Home = () => {
    const products = useLoaderData();
    return (
        <>
            <Hero />
            <PopularProducts products={products} />
        </>
    );
};

export default Home;