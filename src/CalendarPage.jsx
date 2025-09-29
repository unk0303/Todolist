import React from "react";

function CalendarPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 flex flex-col min-h-screen">
            {/* 헤더 */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-4">
                    {/* 로고 */}
                    <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        TaskMaster
                    </h1>
                </div>

                {/* 네비게이션 */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-sm font-medium hover:text-primary">
                        Today
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary">
                        Upcoming
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-primary font-bold"
                    >
                        Calendar
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-primary">
                        Focus
                    </a>
                </nav>

                {/* 알림 + 아바타 */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <svg
                            className="text-gray-600 dark:text-gray-400"
                            fill="currentColor"
                            height="20"
                            viewBox="0 0 256 256"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                        </svg>
                    </button>
                    <img
                        alt="User avatar"
                        className="h-10 w-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG-ICzDb195qFzMNuvVtZwUETHf3S9T4BO2NT3NF2vnSHFB98FOOeSegUobbpect_bZdj7H7fyQjrhspcZ_n832dMgTtgpsJrap1d1A0_h-sc7AwvhmuW38CvzHdiNXnWxzCN0GUcgEYcNYUWckXa4AtBaBHIIktQX-T78Ql3iKZi-B1sIobP9YCbQ1inTJUwyiVzGhM1SHchLcCMkHgSOGDrRwy2sL2zYYsu3l6Bss1lKEGqSnsDJBhphjNsU-g8TE2FHyig_OSI"
                    />
                </div>
            </header>

            {/* 메인 */}
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* 캘린더 영역 */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Calendar
                            </h2>
                            <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-primary/90 transition-colors">
                                New Task
                            </button>
                        </div>

                        {/* 달력 */}
                        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                    ←
                                </button>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    July 2024
                                </h3>
                                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                    →
                                </button>
                            </div>

                            <div
                                className="grid gap-1"
                                style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
                            >
                                {/* 요일 */}
                                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                                    <div
                                        key={day}
                                        className="text-center font-medium text-xs text-gray-500 dark:text-gray-400"
                                    >
                                        {day}
                                    </div>
                                ))}

                                {/* 날짜 */}
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                                    <button
                                        key={date}
                                        className={`text-center py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                            date === 15
                                                ? "bg-primary text-white font-bold"
                                                : ""
                                        }`}
                                    >
                                        {date}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 할 일 목록 */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Tasks for July 15
                        </h2>
                        <div className="space-y-4">
                            {[
                                { title: "Team Meeting", time: "10:00 AM" },
                                { title: "Project Review", time: "1:00 PM" },
                                { title: "Client Call", time: "3:00 PM" },
                            ].map((task, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark/50 rounded-xl shadow-lg"
                                >
                                    <button className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                        ⏰
                                    </button>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                                            {task.title}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {task.time}
                                        </p>
                                    </div>
                                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                                        ✏️
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 text-red-500">
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CalendarPage;
