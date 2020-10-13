import React from 'react';

const Layout = ({children}) => {
    
    return (
        <>
        <Navbar message="My Profile"/>
        {children}
        </>
    );
};

export default Layout;