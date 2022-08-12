import React from 'react';
import Header from 'Components/shared/Header';
import Footer from 'Components/shared/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-column justify-content-between">
            <div>
                <Header />
                <div style={{
                    margin: '0 260px',
                }} className='flex flex-column align-items-center'>
                    <div style={{ maxWidth: '1920px' }}>{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}