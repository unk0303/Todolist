import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login.jsx';
import Main from './Main.jsx';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        // 실제 프로젝트에서는 로그인 성공 시 토큰을 저장하는 로직이 추가됩니다.
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // 실제 프로젝트에서는 저장된 토큰을 삭제하는 로직이 추가됩니다.
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
                <Route path="/" element={isLoggedIn ? <Main onLogout={handleLogout} /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;