import { useState, useEffect } from 'react';

export const CourseHeader = ({ name }) => {
    const [nameHeader, setNameHeader] = useState('All Courses');

    useEffect(() => {
        setNameHeader(name);
    }, [name]); // This ensures that nameHeader updates when the name prop changes

    return (
        <>
            <div className="text-3xl m-9">
                <p>{nameHeader}</p>
            </div>

            <div className=" ml-9">
                <p>Courses to get you started</p>
            </div>

            <div className="ml-9">
                <p>Explore courses from experienced, real-world experts.</p>
            </div>
        </>
    );
};
