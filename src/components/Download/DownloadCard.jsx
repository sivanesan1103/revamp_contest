import React from "react";

function Download() {
    return (
        <div className="flex flex-col md:flex-row justify-center m-4 md:m-20">
            <div className="w-full md:w-[70%] h-auto md:h-36 bg-blue-500 rounded-xl hover:bg-blue-600 flex flex-col md:flex-row items-center px-4 md:px-6 py-4 md:py-0">
                <div className="w-full md:w-3/5 mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-xl md:text-4xl font-bold text-white">
                        Start Learning by Downloading the App
                    </p>
                </div>
                <div className="w-full md:w-2/5 flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
                    <button className="rounded-lg bg-transparent border border-white text-white hover:bg-white hover:text-black px-4 py-2">
                        App Store
                    </button>
                    <button className="rounded-lg bg-transparent border border-white text-white hover:bg-white hover:text-black px-4 py-2">
                        Play Store
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Download;
