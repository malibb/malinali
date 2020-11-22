import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    
    return (
        <>
        <Navbar message="My Profile"/>
        {children}
        </>
    );
};

export default Layout;