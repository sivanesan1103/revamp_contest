import BoxReveal from "@/components/magicui/box-reveal";
import Card1 from './card1.svg';
import Card2 from './card2.svg';
import Card3 from './card3.svg';
import Card4 from './card4.svg';
import Arrow from './Arrow.svg';

function CardSection() {
    return (
        <>
            <div className="mt-8 md:mt-14 px-4">
                <div className="flex flex-col items-center">
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <p className="text-2xl md:text-3xl font-bold text-center">
                            What we offer?
                        </p>
                    </BoxReveal>
                </div>

                <div className="flex flex-col items-center mt-4">
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <p className="text-center">
                            We offer comprehensive e-learning programs coupled with freelancing opportunities.
                        </p>
                    </BoxReveal>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center w-full mx-auto my-10 px-4">
                <div className="flex flex-wrap justify-center gap-6 text-lg">
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full sm:w-80 md:w-64 lg:w-72 h-auto p-6 font-bold text-white transition duration-300 bg-blue-500 rounded-lg group hover:bg-blue-600 hover:scale-105">
                            <img src={Card1} alt="icon" className="mb-2 w-16 h-16 mx-auto" />
                            <p className="text-center">4,000 Online courses</p>
                            <a href="/details/courses" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-1/2 transform -translate-x-1/2 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full sm:w-80 md:w-64 lg:w-72 h-auto p-6 font-bold text-white transition duration-300 bg-green-600 rounded-lg group hover:bg-green-700 hover:scale-105">
                            <img src={Card2} alt="icon" className="mb-2 w-16 h-16 mx-auto" />
                            <p className="text-center">Job placement Support</p>
                            <a href="/details/job-placement" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-1/2 transform -translate-x-1/2 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full sm:w-80 md:w-64 lg:w-72 h-auto p-6 font-bold text-white transition duration-300 bg-red-600 rounded-lg group hover:bg-red-700 hover:scale-105">
                            <img src={Card3} alt="icon" className="mb-2 w-16 h-16 mx-auto" />
                            <p className="text-center">Lifetime Slack chat support</p>
                            <a href="/details/slack-support" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-1/2 transform -translate-x-1/2 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full sm:w-80 md:w-64 lg:w-72 h-auto p-6 font-bold text-white transition duration-300 bg-violet-500 rounded-lg group hover:bg-violet-600 hover:scale-105">
                            <img src={Card4} alt="icon" className="mb-2 w-16 h-16 mx-auto" />
                            <p className="text-center">Research and Innovation</p>
                            <a href="/details/research" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-1/2 transform -translate-x-1/2 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>
                </div>
            </div>
        </>
    );
}

export default CardSection;
