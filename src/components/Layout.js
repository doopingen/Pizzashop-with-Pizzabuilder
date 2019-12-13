import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
    const { title } = 'Pizza Shop';

    return (
        <>
            <Header siteTitle={title} />
            <div className='container-full-width'>
                { children }
            </div>
            <Footer />
        </>
    )
}

export default Layout