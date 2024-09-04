import React from "react";
import img1 from './proud_1.svg';
import img2 from './proud_2.svg';
import img3 from './proud_3.svg';
import img4 from './proud_4.svg';

function ProudCards () {
    return( 
        <div className="w-full mb-20">
            <div className="text-center m-5">
                <p className="text-4xl font-bold mb-2">We are Proud</p>
                <p className="text-sm md:text-base">You don't need to struggle alone, We're here to assist you!</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center items-center">
                <div className="flex flex-col items-center">
                    <img src={img1} alt="picture" className="w-16 h-16 mb-4" />
                    <p className="text-2xl font-bold mb-1">345,421</p>
                    <p className="text-sm">Students Enrolled</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src={img2} alt="picture" className="w-16 h-16 mb-4" />
                    <p className="text-2xl font-bold mb-1">2,485</p>
                    <p className="text-sm">Total Courses</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src={img3} alt="picture" className="w-16 h-16 mb-4" />
                    <p className="text-2xl font-bold mb-1">24,085</p>
                    <p className="text-sm">Online Learners</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img src={img4} alt="picture" className="w-16 h-16 mb-4" />
                    <p className="text-2xl font-bold mb-1">35k</p>
                    <p className="text-sm">Foreign Followers</p>
                </div>
            </div>
      </div>
      
    );
}
 
export default ProudCards;