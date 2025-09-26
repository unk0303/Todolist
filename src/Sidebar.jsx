import React from 'react';

const Sidebar = () => {
    // 실제로는 연도별, 위시리스트별로 데이터를 불러오는 로직이 추가됩니다.
    const years = [2023, 2022, 2021, 2020];
    const wishlists = ['여행', '책 읽기', '운동'];

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>연도별</h3>
                <ul>
                    {years.map(year => (
                        <li key={year}>
                            <a href="#">{year}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>위시리스트</h3>
                <ul>
                    {wishlists.map(item => (
                        <li key={item}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;