import { useEffect, useState } from "react";

export const OfferBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <div className="p-4 bg-blue-600">
                <div className="flex  justify-center">
                    <p className="text-white">
                       <strong>Unlock Your Potential with Our Big E-Learning Sale!</strong> Get 50% Off All Courses and Start Learning Today!
                    </p>
                    </div>
                    <div className="flex  justify-center">
                    <p className="ml-4 text-xl font-bold text-green-300">Learn More, Pay Less!</p>
                    </div>
            </div>
        </>
    );
};
