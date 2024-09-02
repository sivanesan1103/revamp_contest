import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body/Body";
import { ErrorPage } from "./components/Error/Error";
import { OfferBanner } from "./components/OfferBanner/OfferBanner";
import { Navbar } from "./components/NavBar/NavBar";




const root = ReactDOM.createRoot(document.getElementById("root"));


const WrapperSection = () => {
    return (
  
            <div className="">
                {/* <Header /> */}
                <OfferBanner />
                <Navbar/>
                <Outlet />
                {/* <FootSection /> */}
            </div>
      
    );
};

const WrapperSection1 = () => {
    return (
  
            <div className="">
                {/* <Header /> */}
                <Navbar/>
                <Outlet />
                {/* <FootSection /> */}
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
                    <>
                       
                        <Body />
                    </>
                ),
            },

        ],
        errorElement: <ErrorPage />,
    },
]);

root.render(<RouterProvider router={AppRouter} />);