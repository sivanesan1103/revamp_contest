import { useRouteError } from "react-router-dom";
import errvid from './Vadivelu_empty_pocket.mp4';

export const ErrorPage = () => {
    let error = useRouteError();
    console.log(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-gray-100">
            <h1 className="mb-4 text-4xl font-bold">Error</h1>
            <p className="mb-4 text-lg">Status: {error.status || 'Unknown'}</p>
            <div className="w-full max-w-md">
            <video
    controls
    src={errvid}
    className="w-full"
    autoPlay
    loop
    muted
    playsInline
>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
