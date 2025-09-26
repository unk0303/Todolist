import React, { useEffect, useState } from 'react';
import './Date.css';

const DateComponent = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setCurrentDate(now.toLocaleDateString('ko-KR', options));
    }, []);

    return (
        <div className="date-container">
            <h2 id="current-date">{currentDate}</h2>
        </div>
    );
};

export default DateComponent;