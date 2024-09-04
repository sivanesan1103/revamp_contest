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
import { CourseCard } from "./components/courseCard/courseCard";
import { CourseHeader } from "./components/CourseHeader/CourseHeader";
import { CourseNavigation } from "./components/CourseNavigation/CourseNavigation";





const root = ReactDOM.createRoot(document.getElementById("root"));


const WrapperSection = () => {
    return (
  
            <div >
                {/* <Header /> */}
                <Navbar />
                <Outlet />
               
                <FooterSection />
                
                {/* <FootSection /> */}
            </div>
      
    );
};


// const WrapperCourses = () => {
//     return (
  
//             <div className="">
//                 {/* <Header /> */}
            
//                 <Outlet />
               
//                 <FooterSection />
                
//                 {/* <FootSection /> */}
//             </div>
      
//     );
// };

// const WrapperSection1 = () => {
//     return (
  
//             <div className="">
//                 {/* <Header /> */}
//                 <Navbar/>
//                 <Outlet />
//                 {/* <FootSection /> */}
//             </div>
      
//     );
// };



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
                        <OfferBanner />
                     
                        <Body />
                        <CardSection />
                        <TopInstructors />
                    </>
                ),
            },
            {
                path: "/courses",
                element:(<>
                <CourseHeader />
                <CourseNavigation />
                <CourseCard />
              
                </> ), // Replace 'CourseComponent' with your actual course component
            },
            // Add other routes here
        ],
    },
]);

root.render(<RouterProvider router={AppRouter} />);