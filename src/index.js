import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    createRoutesFromElements,
  } from "react-router-dom";
import Products from "./Routes/Products";
import Home from "./Routes/Home";
import Reports from "./Routes/Reports";
import Navbar from "./Components/Navbar";
import FetchJob from "./Routes/FetchJob";
import FetchDistrict from "./Routes/FetchDistrict";
import FetchCounty from "./Routes/FetchCounty";

const AppLayout=()=>(
    <>
        
        <Navbar/>
        <Outlet/>
    </>
)
    

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/fetchJobs" element={<FetchJob />} />
      <Route path="/fetchDistrict" element={<FetchDistrict />} />
      <Route path="/fetchCounty" element={<FetchCounty />} />
    </Route>
  )
);


// const router = createBrowserRouter([
//     {
//         element:<AppLayout/>,
//         children:[
//             { 
//                 path:"/",
//                 element:<Home/>,
//               },
//               {
//                 path:"products",
//                 element:<Products/>
//               },
//               {
//                 path:"reports",
//                 element:<Reports/>
//               },
//         ]
//     },
  
  
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
