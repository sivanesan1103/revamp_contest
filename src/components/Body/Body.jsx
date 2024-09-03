import Image from './girl.png'
export const Body = () => {
    return (
<div className='flex flex-col md:flex-row justify-center h-screen p-8 bg-[#B8DDE3]'>
    <div className='mt-12 text-center md:w-1/2 md:mt-24'>
        <p className='mb-3 text-4xl font-extrabold md:text-6xl'>Start your Own Online Learning</p>
        <p className='mb-2 font-bold text-md md:text-lg'>Unlimited access to all 60+ instructors.</p>
        <p className='text-sm md:text-base'>You're guaranteed to find something that’s right for you.</p>
    </div>
    <div className='h-64 mt-5 md:h-full md:mt-0'>
        <img 
            src={Image} 
            alt="Cover" 
            className="object-contain w-full h-full"
        />
    </div>
</div>


    );
};
