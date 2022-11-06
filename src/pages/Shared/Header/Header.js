import React from 'react';
import { Link } from 'react-router-dom';
import sf from '../../../assets/sf.png'


const Header = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link
                        to="/" className='flex items-center'>
                        <img src={sf} className="mr-3 h-6 sm:h-9" alt="surface Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-700 dark:text-white">Surface Coding</span>

                    </Link>
                    <div className='flex items-center'>
                        <Link to="/login" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                        <Link to="/register" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3">Register</Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center justify-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium ">
                            <li>

                                <Link to="/" className='text-gray-900 dark:text-white hover:underline'>Home</Link>
                            </li>
                            <li>

                                <Link to="/courses" className='text-gray-900 dark:text-white hover:underline'>Courses</Link>
                            </li>
                            <li>

                                <Link to="/faq" className='text-gray-900 dark:text-white hover:underline'>FAQ</Link>
                            </li>
                            <li>

                                <Link to="/blog" className='text-gray-900 dark:text-white hover:underline'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;