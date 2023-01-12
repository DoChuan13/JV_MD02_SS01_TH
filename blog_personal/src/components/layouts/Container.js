import React from 'react';
import Footer from './Footer';
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './Header';


function Container() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Container
