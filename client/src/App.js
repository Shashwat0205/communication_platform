import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import setAuthToken from './api';

const App = () => {
    // Check for token in URL
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
