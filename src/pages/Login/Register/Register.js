
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()




    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password, name, photoURL)
            .then((result) => {
                const user = result.user;
                form.reset()
                navigate('/')
                toast.success('Successfully create account')
                console.log(user)
            })
            .catch(error => {
                toast.error(error.message)
            })

    };
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div className='grid lg:grid-cols-9 my-10 mx-3'>

            <div className='lg:col-start-4 lg:col-span-3 bg-slate-300 p-10 rounded-lg '>
                <h3 className='text-gray-700 font-bold text-2xl'>Register</h3>
                <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />

                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="text" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your name" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Photo URL</label>
                        <input type="text" name='photoURL' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your photoURL" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your email" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" onClick={handleAccepted} type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <Link><label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-sky-500 ">Accept <Link to="/terms"><span className='text-blue-600'>Our terms and condition</span></Link></label>
                        </Link>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium 'text-blue-500' text-gray-900 dark:text-gray-300">Already have an account <Link className='text-blue-600' to="/login">Login</Link></label>
                    </div>
                    <button type="submit" disabled={!accepted} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>

        </div>



    );
};

export default Register;