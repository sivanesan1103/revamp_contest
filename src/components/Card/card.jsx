import BlurFade from "@/components/magicui/blur-fade";


function CardSection() {
    return (


        <>
       
            <div className="mt-14 " >
                <div className="flex items-center justify-center" >
                    <p className="text-3xl ">
                        What we offer?
                    </p>
                </div>
                <div className="flex items-center justify-center" >
                    <p>
                        We offers comprehensive e-learning programs coupled with freelancing opportunities
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center w-4/5 m-20 mx-auto">
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                
                    <div className="relative w-full h-48 p-4 font-bold text-white transition duration-300 bg-blue-500 rounded-lg group sm:w-52 md:w-44 lg:w-48 hover:bg-blue-600">
                  
                        <p>4,000 Online courses</p>
                        <a href="/details/courses" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">→</a>
       
                    </div>
                 
                    <div className="relative w-full h-48 p-4 font-bold text-white transition duration-300 bg-green-600 rounded-lg group sm:w-52 md:w-44 lg:w-48 hover:bg-green-700">
                        <p>Job placement Support</p>
                        <a href="/details/job-placement" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">→</a>
                    </div>

                    <div className="relative w-full h-48 p-4 font-bold text-white transition duration-300 bg-red-600 rounded-lg group sm:w-52 md:w-44 lg:w-48 hover:bg-red-700">
                        <p>Lifetime Slack chat support</p>
                        <a href="/details/slack-support" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">→</a>
                    </div>

                    <div className="relative w-full h-48 p-4 font-bold text-white transition duration-300 rounded-lg group sm:w-52 md:w-44 lg:w-48 bg-violet-500 hover:bg-violet-600">
                        <p>Research and Innovation</p>
                        <a href="/details/research" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">→</a>
                    </div>
                </div>
            </div>
          
        </>

    );
}

export default CardSection;


// <div className="flex items-center justify-center w-auto ">
//     <div className="flex flex-row items-center justify-center text-lg">
//         <div className="w-auto m-5 bg-yellow-200 border-2 border-black rounded-lg h-60 p-7">
//             <p>4,000 Online courses</p>
//         </div>
//         <div className="w-auto m-5 bg-green-400 border-2 border-black rounded-lg h-60 p-7">
//             <p>Job placement Support</p>
//         </div>
//         <div className="w-auto m-5 bg-red-400 border-2 border-black rounded-lg h-60 p-7">
//             <p>Lifetime Slack chat support</p>
//         </div>
//         <div className="w-auto m-5 border-2 border-black rounded-lg h-60 p-7 bg-violet-400">
//             <p>Research and Innovation</p>
//         </div>
//     </div>
// </div>