import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";

import HomePages from "./pages/HomePages";
import About from "./pages/About";
import OrganisationalExperience from "./pages/OrganisationalExperience.jsx";
import WorkExperience from "./pages/WorkExperience.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Footer from "./components/Footer.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <Navbar/>  
    <HomePages/>
    
    </> 
  },{
    path:"/home",
    element :<>
      <Navbar/>
      <HomePages/>
      
    </>
  },
  {
    path:"/about",
    element :<>
      <Navbar/>
      <About/>
      <Footer/>
    
    </>
  },
  {
    path:"/organizational",
    element :<>
      <Navbar/>
      <OrganisationalExperience />
      <Footer/>
    
    </>
  },
  {
    path:"/workexperience",
    element :<>
      <Navbar/>
      <WorkExperience/>
      <Footer/>
    
    </>
  },{
    path:"/contact",
    element :<>
      <Navbar/>
      <ContactMe/>
      <Footer/>
    
    </>
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
