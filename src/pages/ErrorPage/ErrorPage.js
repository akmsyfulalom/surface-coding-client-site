import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>

            <div class="p-4 mt-24 mx-32 text-center  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Something wrong</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"> Move into the room and navigate from there </p>
                <Link to="/" > <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "> Go to Home</button>
                </Link>
            </div>



        </div >
    );
};

export default ErrorPage;