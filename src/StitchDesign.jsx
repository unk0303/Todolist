// StitchDesign.jsx
import React from "react";

function StitchDesign() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display flex min-h-screen w-full">
            {/* 사이드바 */}
            <aside className="flex w-72 flex-col gap-y-6 border-r border-primary/20 bg-background-light p-4 dark:bg-background-dark dark:border-primary/30">
                <div className="flex flex-col gap-y-2">
                    {/* Inbox */}
                    <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:bg-primary/20" href="#">
                        <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                            <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V168H76.69L96,187.32A15.89,15.89,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Inbox</span>
                    </a>

                    {/* Today */}
                    <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-background-dark/70 hover:bg-primary/10 hover:text-primary dark:text-background-light/70 dark:hover:bg-primary/20" href="#">
                        <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Today</span>
                    </a>

                    {/* Upcoming */}
                    <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-background-dark/70 hover:bg-primary/10 hover:text-primary dark:text-background-light/70 dark:hover:bg-primary/20" href="#">
                        <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Upcoming</span>
                    </a>

                    {/* Filters & Labels */}
                    <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-background-dark/70 hover:bg-primary/10 hover:text-primary dark:text-background-light/70 dark:hover:bg-primary/20" href="#">
                        <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                            <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Filters & Labels</span>
                    </a>
                </div>

                {/* 연도별 그룹 */}
                <div className="mt-auto flex flex-col gap-y-2">
                    {["2024", "2023", "2022"].map((year) => (
                        <a key={year} className="group flex items-center gap-3 rounded-lg px-3 py-2 text-background-dark/70 hover:bg-primary/10 hover:text-primary dark:text-background-light/70 dark:hover:bg-primary/20" href="#">
                            <svg className="transition-transform duration-300 group-focus-within:rotate-90" fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                            <span className="text-sm font-medium">{year}</span>
                        </a>
                    ))}
                </div>
            </aside>

            {/* 메인 */}
            <main className="flex-1 p-6">
                <div className="mx-auto max-w-4xl">
                    {/* 검색창 */}
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="text-background-dark/50 dark:text-background-light/50" fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                            </svg>
                        </div>
                        <input className="w-full rounded-lg border-primary/20 bg-background-light py-3 pl-10 pr-4 text-background-dark placeholder:text-background-dark/50 focus:border-primary focus:ring-primary dark:border-primary/30 dark:bg-background-dark dark:text-background-light dark:placeholder:text-background-light/50" placeholder="Search tasks, projects, and more" type="search"/>
                    </div>

                    {/* 달력 */}
                    <div className="mt-8 flex justify-center">
                        <div className="w-full max-w-sm rounded-xl border border-primary/20 bg-background-light p-4 dark:border-primary/30 dark:bg-background-dark">
                            {/* 달력 헤더 */}
                            <div className="flex items-center justify-between">
                                <button className="rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20">
                                    <svg className="text-background-dark/70 dark:text-background-light/70" fill="currentColor" height="18" width="18" viewBox="0 0 256 256">
                                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                                    </svg>
                                </button>
                                <p className="text-base font-semibold text-background-dark dark:text-background-light">May 2024</p>
                                <button className="rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20">
                                    <svg className="text-background-dark/70 dark:text-background-light/70" fill="currentColor" height="18" width="18" viewBox="0 0 256 256">
                                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* 날짜 */}
                            <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
                                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                                    <div key={d} className="py-2 text-xs font-semibold text-background-dark/60 dark:text-background-light/60">{d}</div>
                                ))}

                                {/* 1~31일 */}
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                    <div key={day} className={day === 1 ? "col-start-4" : ""}>
                                        <button
                                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm hover:bg-primary/10 dark:hover:bg-primary/20 ${
                                                day === 5 ? "bg-primary font-semibold text-white" : ""
                                            }`}
                                        >
                                            {day}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default StitchDesign;
