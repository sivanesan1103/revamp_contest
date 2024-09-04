import React from "react";
import teacher from './teacher.jpg';
import student from './student.jpg';

const SkilllineSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Is <span className="text-indigo-600">Skillline?</span></h2>
            <p className="mt-4 text-lg text-gray-600">
                Sloshed faff about me old mucker blatant bubble and squeak hanky panky
                some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered
                smashing blow off I'm telling up the kyver he legged it bleeder jolly
                good,
            </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8">
            <div className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img
                    src={student}
                    alt="Online Learning"
                    className="h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-50 duration-700 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-bold">Mostly Online Learning</h3>
                    <button className="mt-4 px-4 py-2 rounded-lg bg-transparent border text-white hover:bg-white hover:text-black">
                    Start a class today
                    </button>
                </div>
            </div>

        
            <div className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img
                    src={teacher}
                    alt="Become an Instructor"
                    className="h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-50 duration-700 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-bold">Become an Instructor</h3>
                    <button className="mt-4 px-4 py-2 bg-transparent border text-white hover:bg-white hover:text-black rounded-lg">
                    Start teaching
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SkilllineSection;
