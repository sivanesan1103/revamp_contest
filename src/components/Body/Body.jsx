import Image from './girl.png'
export const Body = () => {
    return (
        <div className='bg-gray-300 flex justify-center p-8'>
            <div className='w-1/2 text-center mt-24'>
                <p className='text-6xl font-extrabold mb-3'>Start your
                Own Online Learning</p>
                <p className='font-bold text-lg mb-2'>Unlimited access to all 60+ instructors.</p>
                <p>You`re guaranteed to find something that`s right for you.</p>
            </div>
            <div className='w-1/2'>
                <img 
                    src={Image} 
                    alt="Cover" 
                    className="w-full h-full object-cover mr-20"
                />
            </div>
        </div>
    );
};
