import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
    const handleEditClick = () => {
        const newText = prompt('수정할 내용을 입력하세요:', todo.text);
        if (newText !== null && newText.trim() !== '') {
            onEdit(todo.id, newText.trim());
        }
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
            <div className="buttons">
                <button className="edit-btn" onClick={handleEditClick}>수정</button>
                <button className="delete-btn" onClick={() => onDelete(todo.id)}>삭제</button>
            </div>
        </li>
    );
};

export default TodoItem;