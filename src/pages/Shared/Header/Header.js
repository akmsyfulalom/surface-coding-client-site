import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import sf from '../../../assets/sf.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error))
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link
                        to="/" className='flex items-center'>
                        <img src={sf} className="mr-3 h-6 sm:h-9" alt="surface Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-700 dark:text-white">Surface Coding</span>

                    </Link>
                    <div className='flex items-center '>


                        {
                            user?.uid ? <>

                                <button onClick={handleLogOut} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log Out</button>
                                <span className='mr-3'>
                                    {
                                        user?.photoURL ? <>
                                            <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />
                                        </>
                                            :
                                            <>
                                                <FaUser></FaUser>

                                            </>
                                    }
                                </span>
                            </>
                                :
                                <>
                                    <Link to="/login" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline ">Login</Link>
                                    <Link to="/register" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3">Register</Link>
                                </>
                        }


                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center justify-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium ">
                            <li>

                                <Link to="/" className='text-gray-900 dark:text-white hover:underline  hover:text-blue-500'>Home</Link>
                            </li>
                            <li>

                                <Link to="/courses" className='text-gray-900 dark:text-white hover:underline hover:text-blue-500'>Courses</Link>
                            </li>
                            <li>

                                <Link to="/faq" className='text-gray-900 dark:text-white hover:underline hover:text-blue-500'>FAQ</Link>
                            </li>
                            <li>

                                <Link to="/blog" className='text-gray-900 dark:text-white hover:underline hover:text-blue-500'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;