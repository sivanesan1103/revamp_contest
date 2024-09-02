import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body/Body";
import { ErrorPage } from "./components/Error/Error";




const root = ReactDOM.createRoot(document.getElementById("root"));


const WrapperSection = () => {
    return (
        <div className="mx-auto 2xl:container">
            <div className="w-[70%] mx-auto">
                {/* <Header /> */}
                <Outlet />
                {/* <FootSection /> */}
            </div>
        </div>
    );
};


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <WrapperSection />,
        children: [
            {
                path: "/",
                element: (
                 
                        <Body/>
         
                ),
            },
           
        ],
        errorElement: <ErrorPage/>,
    },
]);

root.render(<RouterProvider router={AppRouter} />);