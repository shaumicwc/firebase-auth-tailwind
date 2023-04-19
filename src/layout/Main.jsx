import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;