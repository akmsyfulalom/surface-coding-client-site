import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseView = () => {
    const view = useLoaderData()

    console.log(view);
    return (
        <div>
            {view.title}
        </div>
    );
};

export default CourseView;