import BoxReveal from "@/components/magicui/box-reveal";
import Card1 from './card1.svg';
import Card2 from './card2.svg';
import Card3 from './card3.svg';
import Card4 from './card4.svg';
import Arrow from './Arrow.svg';

function CardSection() {
    return (
        <>
            <div className="mt-14">
                <div className="flex items-center justify-center">
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <p className="text-3xl font-bold">
                            What we offer?
                        </p>
                    </BoxReveal>
                </div>

                <div className="flex items-center justify-center">
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <p>
                            We offer comprehensive e-learning programs coupled with freelancing opportunities.
                        </p>
                    </BoxReveal>
                </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center w-4/5 m-20 mx-auto">
                <div className="flex flex-wrap justify-center gap-6 text-lg"> {/* Increased gap for spacing */}
                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full h-56 p-6 font-bold text-white transition duration-300 bg-blue-500 rounded-lg group sm:w-64 md:w-60 lg:w-64 hover:bg-blue-600 hover:scale-105 hover:rounded-lg"> {/* Increased width and height */}
                            <img src={Card1} alt="icon" className="mb-2" />
                            <p>4,000 Online courses</p>
                            <a href="/details/courses" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full h-56 p-6 font-bold text-white transition duration-300 bg-green-600 rounded-lg group sm:w-64 md:w-60 lg:w-64 hover:bg-green-700 hover:scale-105"> {/* Increased width and height */}
                            <img src={Card2} alt="icon" className="mb-2" />
                            <p>Job placement Support</p>
                            <a href="/details/job-placement" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full h-56 p-6 font-bold text-white transition duration-300 bg-red-600 rounded-lg group sm:w-64 md:w-60 lg:w-64 hover:bg-red-700 hover:scale-105"> {/* Increased width and height */}
                            <img src={Card3} alt="icon" className="mb-2" />
                            <p>Lifetime Slack chat support</p>
                            <a href="/details/slack-support" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">
                                <img src={Arrow} alt="arrow icon"/>
                            </a>
                        </div>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B8DDE3"} duration={0.5}>
                        <div className="relative w-full h-56 p-6 font-bold text-white transition duration-300 rounded-lg group sm:w-64 md:w-60 lg:w-64 bg-violet-500 hover:bg-violet-600 hover:scale-105"> {/* Increased width and height */}
                            <img src={Card4} alt="icon" className="mb-2" />
                            <p>Research and Innovation</p>
                            <a href="/details/research" className="absolute hidden text-3xl text-white transition duration-300 bottom-4 left-4 group-hover:block hover:text-white">
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
