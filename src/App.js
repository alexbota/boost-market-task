import React from 'react';
import '/node_modules/primeflex/primeflex.css';

// ROUTING
import { BrowserRouter } from 'react-router-dom';
import RoutesProvider from 'Routes/';

function App() {
    return (
        <BrowserRouter basename="/">
            <RoutesProvider />
        </BrowserRouter>
    );
}

export default App;
