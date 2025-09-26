import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ onAddTodo }) => {
    const [inputText, setInputText] = useState('');

    const handleAddClick = () => {
        if (inputText.trim() !== '') {
            onAddTodo(inputText);
            setInputText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddClick();
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                id="todo-input"
                placeholder="새로운 할 일을 입력하세요"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button id="add-btn" onClick={handleAddClick}>추가</button>
        </div>
    );
};

export default TodoInput;