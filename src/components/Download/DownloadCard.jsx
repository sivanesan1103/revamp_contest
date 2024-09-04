import React from "react";

function Download () {
    return(
        <div className="flex flex-row justify-center m-20">
            <div className="w-[70%] h-36 bg-blue-500 rounded-xl hover:bg-blue-600 flex items-center px-6">
                <div className="w-3/5">
                <p className="text-4xl font-bold text-white">Start Learning by Downloading the App</p>
                </div>
                <div className="w-2/5 flex justify-end space-x-4">
                <button className="rounded-lg bg-transparent border text-white hover:bg-white hover:text-black px-4 py-2">
                    App Store
                </button>
                <button className="rounded-lg bg-transparent border text-white hover:bg-white hover:text-black px-4 py-2">
                    Play Store
                </button>
                </div>
            </div>
        </div>
    );
}

export default Download;