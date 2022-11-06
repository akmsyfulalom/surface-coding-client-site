import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf, FaBusinessTime, FaBuffer, FaBuysellads } from 'react-icons/fa';

const CourseView = () => {
    const view = useLoaderData()
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
                                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span class="relative px-5 py-2.5 transition-all flex align-items-center  justify-content-center ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Download PDF <FaFilePdf></FaFilePdf>
                                    </span>
                                </button></div>

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
                        <Link>
                            <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
                                Pay with Bitcoin
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseView;