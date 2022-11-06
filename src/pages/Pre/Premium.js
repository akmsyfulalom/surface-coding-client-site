import React from 'react';
import { FaMedkit } from "react-icons/fa";

const Premium = () => {
    return (
        <div className='my-20'>
            <div className='lg:m-28 md:m-16 m-6 text-center'>
                <p className='font-bold lg:text-5xl flex  text-amber-400 justify-around'><FaMedkit></FaMedkit></p>
                <h1 className='font-bold lg:text-5xl text-amber-400'> Go Premium</h1>
            </div>
            <div>
                <h1 className='font-bold text-3xl text-gray-700'>You can explore more by enabling Premium access</h1>
            </div>
            <div className=' grid justify-items-center'>
                <div className='flex items-center drop-shadow-lg bg-slate-300 my-10 rounded-lg '>
                    <div className='p-10'>
                        <p className='font-bold text-gray-700 text-xl'><span className='font-bold text-amber-400 text-3xl'>$100</span>/month</p>
                        <p className='font-bold text-gray-700 text-xl'><span className='text-1xl' >$960</span> every <span className='text-1xl'>12 </span> months</p>

                    </div>
                    <div><button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                        Go to pro
                    </button></div>
                </div>
                <div>
                    <div className='flex items-center drop-shadow-lg bg-slate-300 '>
                        <div className='p-10'>
                            <p className='font-bold text-gray-700 text-xl'><span className='font-bold text-amber-400 text-3xl'>$100</span>/month</p>
                            <p className='font-bold text-gray-700 text-xl'><span className='text-1xl' >$960</span> every <span className='text-1xl'>12 </span> months</p>

                        </div>
                        <div><button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                            Go to pro
                        </button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;