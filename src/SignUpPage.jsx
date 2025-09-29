import React from "react";

function SignUpPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display flex flex-col min-h-screen">
            {/* 헤더 */}
            <header className="w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6 border-b border-black/10 dark:border-white/10">
                        {/* 로고 + 제목 */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 text-primary">
                                <svg
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-black/90 dark:text-white/90">
                                TaskMaster
                            </h1>
                        </div>

                        {/* 네비게이션 */}
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#"
                                className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                Support
                            </a>
                            <a
                                href="#"
                                className="px-4 py-2 text-sm font-bold rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 컨텐츠 */}
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    {/* 제목 영역 */}
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-black/90 dark:text-white/90">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-black/60 dark:text-white/60">
                            Already have an account?{" "}
                            <a
                                href="#"
                                className="font-medium text-primary hover:text-primary/80"
                            >
                                Log in
                            </a>
                        </p>
                    </div>

                    {/* 회원가입 폼 */}
                    <form className="mt-8 space-y-6" method="POST">
                        <div className="rounded-lg shadow-sm -space-y-px">
                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    New username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    placeholder="Username"
                                    className="form-input appearance-none relative block w-full px-3 py-3 border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black/90 dark:text-white/90 rounded-t-lg focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email address"
                                    className="form-input appearance-none relative block w-full px-3 py-3 border-t-0 border-b border-x border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black/90 dark:text-white/90 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    placeholder="Password"
                                    className="form-input appearance-none relative block w-full px-3 py-3 border-t-0 border-b border-x border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black/90 dark:text-white/90 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">
                                    Confirm password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    placeholder="Confirm password"
                                    className="form-input appearance-none relative block w-full px-3 py-3 border-t-0 border-b border-x border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark text-black/90 dark:text-white/90 rounded-b-lg focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* 회원가입 버튼 */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default SignUpPage;
