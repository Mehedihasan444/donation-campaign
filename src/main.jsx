import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Donation from "./Donation/Donation";
import Statistics from "./Statistics/Statistics";

const router = createBrowserRouter(
  [
    {
       path:"/",
       element: <MainLayout></MainLayout>,
       children:[
        {
          path:"/",
          element: <Banner></Banner>
        },
        {
          path:"/",
          element: <Cards></Cards>
        }
       ]
    },
    {
      path:"/Donation",
      element: <Donation></Donation>
    },
    {
      path:"/Statistics",
      element: <Statistics> </Statistics>
    }

  ]
  );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
