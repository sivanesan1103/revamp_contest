import { useState } from 'react';
import { CourseHeader } from "../CourseHeader/CourseHeader";

export const CourseNavigation = () => {
    const [name, setName] = useState('All Courses');

    const change = (num) => {
        if (num === 1) {
            setName("Web Development");
        } else if (num === 2) {
            setName("Mobile Development");
        } else if (num === 3) {
            setName("IT Certifications");
        }
    };

    return (
        <>
            <CourseHeader name={name} />
            <div className="flex mx-6 my-2 space-x-4 overflow-x-auto border-b-4" id="course-tab-navigation" aria-live="off">
                <div className="flex-none">
                    <button
                        type="button"
                        id="tab-0"
                        aria-selected="true"
                        role="tab"
                        className="px-4 py-2 text-lg font-semibold text-gray-600 border-b-2 border-transparent hover:text-blue-600"
                        onClick={() => change(1)}
                    >
                        Web Development
                    </button>
                </div>
                <div className="flex-none">
                    <button
                        type="button"
                        id="tab-1"
                        aria-selected="false"
                        role="tab"
                        className="px-4 py-2 text-lg font-semibold text-gray-600 border-b-2 border-transparent hover:text-blue-600"
                        onClick={() => change(2)}
                    >
                        Mobile Development
                    </button>
                </div>
                <div className="flex-none">
                    <button
                        type="button"
                        id="tab-2"
                        aria-selected="false"
                        role="tab"
                        className="px-4 py-2 text-lg font-semibold text-gray-600 border-b-2 border-transparent hover:text-blue-600"
                        onClick={() => change(3)}
                    >
                        IT Certifications
                    </button>
                </div>
            </div>
        </>
    );
};
