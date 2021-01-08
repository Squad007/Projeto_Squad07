import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Register  from './Pages/Register';
import Report from './Pages/Report';

export default function Eli() {
    return(
        
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/notification" element={<Notification />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/report" element={<Report />}/>
            </Routes>
        
    );
}