import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {

    const courses = useLoaderData()
    return (
        <div >
            <div className='lg:m-28 md:m-16 m-6'>
                <h1 className='font-bold lg:text-5xl text-slate-700'>Courses</h1>
            </div>
            <h1 className='font-bold lg:text-3xl text-slate-700 mb-10'>We have {courses.length} courses</h1>
            <div className='grid grid-cols-4 gap-x-10'>
                <div className='ml-4' >
                    <div >

                        <h2 className="mb-2  text-lg font-semibold text-gray-900 dark:text-white">Find your courses :</h2>

                        <div>

                            {
                                courses.map(category => <dib categories={category.id} category={category}>
                                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{category.title}</button>

                                </dib>)
                            }
                        </div>

                    </div>
                </div>
                {

                }
                <div className='col-span-3 mr-4'>
                    <div className='grid grid-cols-3 gap-x-5 gap-y-5'>
                        {
                            courses.map(course => <div key={course.id} course={course}>
                                <div className='col-span-1 bg-slate-500 '>

                                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                                        <img className="rounded-t-lg" src={course.image_url} alt="" />

                                        <div className="p-5">

                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>

                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.short_details.slice(0, 100)}</p>
                                            <p className='font-bold text-2xl text-amber-500'>$80</p>
                                            <Link to={`/course/${course._id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Details
                                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Courses;