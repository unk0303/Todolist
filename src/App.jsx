import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 각 페이지 import
import LoginPage from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import StitchDesign from "./StitchDesign.jsx";
import CalendarPage from "./CalendarPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* 기본 루트("/")를 로그인 페이지로 설정 */}
                <Route path="/" element={<LoginPage />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<SignUpPage />} />

                {/* 스티치 디자인 페이지 */}
                <Route path="/stitch" element={<StitchDesign />} />

                {/* 캘린더 페이지 */}
                <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
        </Router>
    );
}

export default App;
