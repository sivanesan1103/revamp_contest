import { useState } from 'react';
import { CourseHeader } from "../CourseHeader/CourseHeader";

import { products } from "../../api/WebDevelopment";
import { products2 } from "../../api/MobileDevelopment";
import { products3 } from "../../api/ITCertifications";
import { CourseCard } from '../courseCard/courseCard';

export const CourseNavigation = () => {
    const [name, setName] = useState('All Courses');
    const [productList, setProductList] = useState([...products, ...products2, ...products3]);

    const change = (num) => {
        if (num === 1) {
            setName("Web Development");
            setProductList(products);
        } else if (num === 2) {
            setName("Mobile Development");
            setProductList(products2);
        } else if (num === 3) {
            setName("IT Certifications");
            setProductList(products3);
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
            <CourseCard productList={productList} />
        </>
    );
};
