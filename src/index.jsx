import ReactDOM from "react-dom/client";
import "./index.css";
import "./hover.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body/Body";
import { ErrorPage } from "./components/Error/Error";
import { OfferBanner } from "./components/OfferBanner/OfferBanner";
import { Navbar } from "./components/NavBar/NavBar";
import CardSection from "./components/Card/card";
import FooterSection from "./components/Footer/footer";
import TopInstructors from "./components/Top_Instructors/Top_Instructors";

import { CourseNavigation } from "./components/CourseNavigation/CourseNavigation";
import SkilllineSection from "./components/SkillCard/SkillCard";
import ProudCards from "./components/ProudSection/Proudcard";
import Download from "./components/Download/DownloadCard";
import { Banner } from "flowbite-react";
import { Price } from "./components/Price/Price";
import { Banner1 } from "./components/Banner/Banner";
import { Contact } from "lucide-react";
import { Contact1 } from "./components/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
const WrapperSection = () => {
    return (
  
            <div >

       
                <Outlet />
               
                <FooterSection />
                
              
            </div>
      
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <WrapperSection />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <>
                       
                        <Navbar />
                        <Body />
                        <CardSection />
                        <TopInstructors />
                        <SkilllineSection />
                        <ProudCards />
                 
                        <Download />
                    </>
                ),
            },
            {
                path: "/courses",
                element:(<>
                 <Banner1 name="Courses"/>
                <CourseNavigation />
        
              
                </> ), 
            },
            {
                path: "/Pricing",
                element:(<>
                <Banner1 name="Pricing & Plans"/>
                <Price/>
             
        
              
                </> ), 
            },
            {
                path: "/Contact",
                element:(<>
                <Banner1 name="Contact us"/>
                <Contact1/>
             
        
              
                </> ),             },
            
        ],
    },
]);

root.render(<RouterProvider router={AppRouter} />);