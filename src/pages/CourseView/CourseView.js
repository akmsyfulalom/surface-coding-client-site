import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf, FaBusinessTime, FaBuffer, FaBuysellads } from 'react-icons/fa';


const CourseView = () => {
    const view = useLoaderData()
    const premium = useLoaderData()
    const { title, short_details, image_url, author, details, rating } = view;
    return (
        <div className='m-10'>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 '>
                <div className='col-span-2 '>


                    <div class="p-4 w-full  bg-gray-100 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold text-gray-700 dark:text-white">{title}</h5>
                        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{short_details}</p>
                        <div className=' flex justify-between'>
                            <div className='flex items-center justify-content-center'>
                                <img className='w-16 rounded-full mr-3' src={author.img} alt="" />
                                <p className='font-bold text-lime-500 '>{author.name}</p>
                            </div>
                            <div>
                                <a href="course.pdf" download="course.pdf">
                                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span class="relative px-5 py-2.5 transition-all flex align-items-center  justify-content-center ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Download PDF <FaFilePdf></FaFilePdf>
                                        </span>
                                    </button>
                                </a>
                            </div>

                        </div>
                        <img class="rounded-t-lg my-5" src={image_url} alt="" />
                        <div>
                            <h3 className='font-bold text-gray-700 text-xl my-5'>Description</h3>
                            <p>{details}</p>
                        </div>

                    </div>


                </div>
                <div >

                    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{title}</h5>
                        <div className='flex justify-between font-bold text-gray-500'>
                            <p>Rating: <span className='text-xl text-amber-500'>{rating.number}</span></p>
                            <p>Quality: <span className='text-xl text-amber-500'>{rating.badge}</span></p>
                        </div>
                        <div className='my-5'>
                            <p className='flex items-center font-bold text-gray-500'> <FaBusinessTime></FaBusinessTime>  Total hour: {rating.total_duration}</p>
                            <p className='flex items-center font-bold text-gray-500'> <FaBuffer></FaBuffer>  Total Class: {rating.total_class}</p>
                            <p className='flex items-center font-bold text-gray-500'> <FaBuysellads></FaBuysellads>Price:  <span className='text-xl text-amber-500'>  ${rating.price}</span></p>

                        </div>
                        <Link to={`/premium/${premium._id}`} className='flex items-center justify-center'>
                            <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                                Go to premium access
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseView;