import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';

const CourseView = () => {
    const view = useLoaderData()
    const { title, short_details, image_url, author } = view;
    return (
        <div className='m-10'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='col-span-2 '>


                    <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-gray-700 dark:text-white">{title}</h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{short_details}</p>
                        <div className=' flex justify-between'>
                            <div className='flex items-center justify-content-center'>
                                <img className='w-16 rounded-full mr-3' src={author.img} alt="" />
                                <p className='font-bold text-lime-500 '>{author.name}</p>
                            </div>
                            <div><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span class="relative px-5 py-2.5 transition-all flex align-items-center  justify-content-center ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Download PDF <FaFilePdf></FaFilePdf>
                                </span>
                            </button></div>

                        </div>
                        <img class="rounded-t-lg" src={image_url} alt="" />

                    </div>


                </div>
                <div className='bg-red-500'>
                    <h1>small side </h1>
                </div>
            </div>
        </div>
    );
};

export default CourseView;