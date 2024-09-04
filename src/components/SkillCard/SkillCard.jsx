import React from "react";
import teacher from './teacher.jpg';
import student from './student.jpg';

const SkilllineSection = () => {
  return (
    <div className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Is <span className="text-blue-600">Skillline?</span></h2>
            <p className="mt-4 text-lg text-gray-600">
                Sloshed faff about me old mucker blatant bubble and squeak hanky panky
                some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered
                smashing blow off I'm telling up the kyver he legged it bleeder jolly
                good,
            </p>
        </div>

        <div className="grid grid-cols-1 mt-10 gap-y-8 md:grid-cols-2 md:gap-x-8">
            <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                <img
                    src={student}
                    alt="Online Learning"
                    className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white duration-700 bg-black bg-opacity-10 hover:bg-opacity-50">
                    <h3 className="text-xl font-bold">Mostly Online Learning</h3>
                    <button className="px-4 py-2 mt-4 text-white bg-transparent border rounded-lg hover:bg-white hover:text-black">
                    Start a class today
                    </button>
                </div>
            </div>

        
            <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                <img
                    src={teacher}
                    alt="Become an Instructor"
                    className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white duration-700 bg-black bg-opacity-10 hover:bg-opacity-50">
                    <h3 className="text-xl font-bold">Become an Instructor</h3>
                    <button className="px-4 py-2 mt-4 text-white bg-transparent border rounded-lg hover:bg-white hover:text-black">
                    Start teaching
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SkilllineSection;
