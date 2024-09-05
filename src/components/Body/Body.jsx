import Image from './girl.png';
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";

export const Body = () => {
    return (
        <div className='relative min-h-screen bg-[#B8DDE3]'>
        <div className='flex flex-col items-center justify-center min-h-screen p-6 md:flex-row md:p-16'>
            {/* Text Section */}
            <BlurFade delay={0.50} inView>
                <div className='sticky top-0 mb-5 text-center md:text-left md:w-1/2 md:mb-0'>
                    <SparklesText className='mt-20 mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl' text="Start your Own Online Learning" />
                    <p className='mb-3 font-bold text-md md:text-lg'>
                        Unlimited access to all 60+ instructors.
                    </p>
                    <p className='text-sm md:text-base'>
                        You're guaranteed to find something that’s right for you.
                    </p>
                </div>
            </BlurFade>
    
            {/* Image Section */}
            <div className='flex items-center justify-center w-full mt-5 md:mt-0 md:w-1/2'>
                <img 
                    src={Image} 
                    alt="Cover" 
                    className="object-cover w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
                />
            </div>
        </div>
    </div>
    
    
    );
};
