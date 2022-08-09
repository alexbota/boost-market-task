import React from 'react';
import Header from 'Components/shared/Header';
import Footer from 'Components/shared/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-column justify-content-between">
            <div>
                <Header />
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}