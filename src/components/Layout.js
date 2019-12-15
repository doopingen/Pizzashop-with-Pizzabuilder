import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
    const { title } = 'Pizza Shop';

    return (
        <>
            <Header siteTitle={title} />
            <div className='container-fluid pl-0 pr-0'>
                { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout