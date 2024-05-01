import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import YourFilms from './pages/YourFilms';
import Navbar from './components/Navbar/Navbar';
import './styles/App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Routes>
                    <Route 
                        path='/' 
                        element={<Navigate to={'/home'} replace={true} />}
                    />
                    <Route 
                        path='/home'
                        element={<Home />} 
                    />
                    <Route 
                        path='/profile'
                        element={<Profile />}
                    />
                    <Route 
                        path='/yourfilms'
                        element={<YourFilms />}
                    />
                    <Route 
                        path='*'
                        element={<h1>404. Not found</h1>} 
                    />
                </Routes>
            </main>
        </BrowserRouter>
    )
};

export default App;