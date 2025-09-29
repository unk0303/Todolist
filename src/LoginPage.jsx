import React from "react";

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark font-display">
            <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-background-dark rounded-xl shadow-lg">
                {/* 제목 영역 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Log in to TaskMaster
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* 로그인 폼 */}
                <form className="mt-8 space-y-6" method="POST">
                    <div className="space-y-4">
                        {/* Username 입력 */}
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                placeholder="Username"
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-gray-800 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                            />
                        </div>

                        {/* Password 입력 */}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-background-light dark:bg-gray-800 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* 비밀번호 찾기 */}
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-primary hover:text-primary/80"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* 로그인 버튼 */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
