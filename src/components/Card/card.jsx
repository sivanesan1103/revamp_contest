 function CardSection() {
    return(
        <div className="flex items-center justify-center w-4/5 mx-auto flex-wrap m-20">
            <div className="flex flex-wrap justify-center text-lg gap-4">
                <div className="group relative text-white font-bold rounded-lg w-full sm:w-52 md:w-44 lg:w-48 h-48 p-4 bg-blue-500 hover:bg-blue-600 transition duration-300">
                <p>4,000 Online courses</p>
                <a href="/details/courses" className="absolute bottom-4 left-4 text-3xl text-white hidden group-hover:block transition duration-300 hover:text-white">→</a>
                </div>
                
                <div className="group relative text-white font-bold rounded-lg w-full sm:w-52 md:w-44 lg:w-48 h-48 p-4 bg-green-600 hover:bg-green-700 transition duration-300">
                <p>Job placement Support</p>
                <a href="/details/job-placement" className="absolute bottom-4 left-4 text-3xl text-white hidden group-hover:block transition duration-300 hover:text-white">→</a>
                </div>
                
                <div className="group relative text-white font-bold rounded-lg w-full sm:w-52 md:w-44 lg:w-48 h-48 p-4 bg-red-600 hover:bg-red-700 transition duration-300">
                <p>Lifetime Slack chat support</p>
                <a href="/details/slack-support" className="absolute bottom-4 left-4 text-3xl text-white hidden group-hover:block transition duration-300 hover:text-white">→</a>
                </div>
                
                <div className="group relative text-white font-bold rounded-lg w-full sm:w-52 md:w-44 lg:w-48 h-48 p-4 bg-violet-500 hover:bg-violet-600 transition duration-300">
                <p>Research and Innovation</p>
                <a href="/details/research" className="absolute bottom-4 left-4 text-3xl text-white hidden group-hover:block transition duration-300 hover:text-white">→</a>
                </div>
            </div>
        </div>


    );
 }

 export default CardSection;


 // <div className=" flex items-center justify-center w-auto">
        //     <div className="flex flex-row items-center justify-center text-lg">
        //         <div className=" border-2 border-black rounded-lg w-auto h-60 p-7 m-5 bg-yellow-200">
        //             <p>4,000 Online courses</p>
        //         </div>
        //         <div className=" border-2 border-black rounded-lg w-auto h-60 p-7 m-5 bg-green-400">
        //             <p>Job placement Support</p>
        //         </div>
        //         <div className=" border-2 border-black rounded-lg w-auto h-60 p-7 m-5 bg-red-400 ">
        //             <p>Lifetime Slack chat support</p>
        //         </div>
        //         <div className=" border-2 border-black rounded-lg w-auto h-60 p-7 m-5 bg-violet-400">
        //             <p>Research and Innovation</p>
        //         </div>
        //     </div>
        // </div>