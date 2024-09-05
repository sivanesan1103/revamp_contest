import Image from './girl.png';
import BlurFade from "@/components/magicui/blur-fade";
import SparklesText from "@/components/magicui/sparkles-text";

export const Body = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center min-h-screen p-6 md:p-16 bg-[#B8DDE3]'>
            {/* Text Section */}
            <BlurFade delay={0.50} inView>
                <div className='text-center md:text-left md:w-1/2 mb-5 md:mb-0'>
                    <SparklesText className='mb-4 text-3xl font-extrabold md:text-4xl lg:text-5xl mt-20' text="Start your Own Online Learning" />
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
                    className="object-contain w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
                />
            </div>
        </div>
    );
};
