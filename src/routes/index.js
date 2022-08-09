import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ELEMENTS
import Apex from 'Containers/Apex';
import Lol from 'Containers/Lol';

const RoutesProvider = () => (
    <Routes>
        <Route path="/apex" element={<Apex />} />
        <Route path="/lol" element={<Lol />} />
    </Routes>
);

export default RoutesProvider;