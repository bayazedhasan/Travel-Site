import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Page/Home/Home';
import Header from '../Components/Shared/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;