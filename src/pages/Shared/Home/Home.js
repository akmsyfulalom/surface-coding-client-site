import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../assets/header_image.png'


const Home = () => {

    return (
        <div className='lg:flex md:flex columns-3xs'>
            <div className='w-ful'>
                <img className='lg:m-20 md:mb-24' src={headerImage} alt="" />
            </div>
            <div className='w-ful mt-10'>

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl  text-slate-700">Develop your skills with Surface Coding</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We have 100k plus students here to present our subject-oriented courses very seriously. Our courses are available here</p>
                <Link to="/courses" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>

            </div>

        </div>
    );
};

export default Home;
