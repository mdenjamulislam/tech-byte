import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <>
            <Header />
            <main className='-mt-14'>
                <Outlet />
            </main>
        </>
    );
};

export default Root;