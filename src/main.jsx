import React from 'react';
import Sidebar from './Sidebar.jsx';
import TodoList from './TodoList.jsx';
import Header from './Header.jsx';

const Main = ({ onLogout }) => {
    return (
        <div className="main-container">
            <Header onLogout={onLogout} />
            <div className="content-area">
                <Sidebar />
                <div className="todo-content">
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default Main;