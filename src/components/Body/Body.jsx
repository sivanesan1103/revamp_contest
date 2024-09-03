import Image from './girl.png'
export const Body = () => {
    return (
            <div className='flex flex-col md:flex-row justify-center items-center h-screen p-8 bg-[#B8DDE3]'>
            {/* Text Section */}
            <div className='text-center md:text-left md:w-1/2 lg:mt-12 md:mt-24'>
            <p className='mb-3 text-4xl font-extrabold md:text-5xl lg:text-6xl'>
                Start your Own Online Learning
            </p>
            <p className='mb-2 font-bold text-md md:text-lg'>
                Unlimited access to all 60+ instructors.
            </p>
            <p className='text-sm md:text-base'>
                You're guaranteed to find something that’s right for you.
            </p>
            </div>

            {/* Image Section */}
            <div className='flex justify-center items-center w-full md:w-1/2 mt-5 md:mt-0'>
            <img 
                src={Image} 
                alt="Cover" 
                className="object-contain w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
            />
            </div>
        </div>
    );
};
