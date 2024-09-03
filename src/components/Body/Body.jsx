import Image from './girl.png'
export const Body = () => {
    return (
        <div className='flex justify-center h-screen p-8 bg-[#B8DDE3]'>
            <div className='w-1/2 mt-24 text-center'>
                <p className='mb-3 text-6xl font-extrabold'>Start your
                Own Online Learning</p>
                <p className='mb-2 text-lg font-bold'>Unlimited access to all 60+ instructors.</p>
                <p>You`re guaranteed to find something that`s right for you.</p>
            </div>
            <div className='w-1/2'>
                <img 
                    src={Image} 
                    alt="Cover" 
                    className="object-cover w-full h-full mr-20"
                />
            </div>
        </div>
    );
};
