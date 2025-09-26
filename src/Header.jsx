import React from 'react';
import './Header.css';

const Header = ({ onLogout }) => {
    return (
        <header className="main-header">
            <div className="header-title">
                <h1>Todo list</h1>
            </div>
            <div className="header-actions">
                {/* 나중에 회원 이름 등을 표시할 수 있는 공간 */}
                <button onClick={onLogout} className="logout-button">로그아웃</button>
            </div>
        </header>
    );
};

export default Header;