import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import YourFilms from './pages/YourFilms';
import Login from './pages/Login';
import Register from './pages/Register';

import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from "./components/ProtectedRoute"


import './styles/App.scss';

const Logout = () => {
    localStorage.clear()
    return <Navigate to="/login" />
}
  
const RegisterAndLogout = () => {
    localStorage.clear()
    return <Register />
}

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
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path='/profile'
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route 
                        path='/yourfilms'
                        element={
                            <ProtectedRoute>
                                <YourFilms />
                            </ProtectedRoute>
                        }
                    />
                
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<RegisterAndLogout />} />

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