import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='grid grid-cols-6 my-10'>
                <div className='col-start-2 col-span-4 mb-5 bg-slate-100 shadow-lg text-justify p-5 rounded-lg' >
                    <h3 className='font-bold text-xl text-gray-700'>1. What is cors?</h3>
                    <p><span className='font-bold'>Ans:</span> Cross-origin resource sharing (CORS) is a mechanism that allows a way for web pages to access API or assets running on a different restricted domain.</p>
                </div>
                <div className='col-start-2 col-span-4 mb-5 bg-slate-100 shadow-lg text-justify p-5 rounded-lg' >
                    <h3 className='font-bold text-xl text-gray-700'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p><span className='font-bold'>Ans:</span> Firebase helps me develop high-quality apps, grow your user base. || Are you looking for alternative app development platforms to Firebase? Here are the 10+ Firebase alternatives for application development.</p>
                    <li className='font-bold'>1. Back4App</li>
                    <li className='font-bold'>2. Parse</li>
                    <li className='font-bold'>3. AWS Amplify</li>
                    <li className='font-bold'>4. Backendless</li>
                    <li className='font-bold'>5. Kuzzle</li>
                    <li className='font-bold'>6. Supabase</li>
                    <li className='font-bold'>7. appwrite</li>
                    <li className='font-bold'>8. Hasura</li>
                    <li className='font-bold'>9. Nhost</li>
                    <li className='font-bold'>10. Deployd</li>
                </div>
                <div className='col-start-2 col-span-4 mb-5 bg-slate-100 shadow-lg text-justify p-5 rounded-lg' >
                    <h3 className='font-bold text-xl text-gray-700'>3. How does the private route work?</h3>
                    <p><span className='font-bold'>Ans:</span> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className='col-start-2 col-span-4 mb-5 bg-slate-100 shadow-lg text-justify p-5 rounded-lg' >
                    <h3 className='font-bold text-xl text-gray-700'>4. What is cors?</h3>
                    <p><span className='font-bold'>Ans:</span> Cross-origin resource sharing (CORS) is a mechanism that allows a way for web pages to access API or assets running on a different restricted domain.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;