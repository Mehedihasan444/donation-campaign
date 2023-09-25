import { createBrowserRouter } from "react-router-dom";
import Donation from "../Pages/Donation/Donation.jsx"
import Statistics from "../Pages/Statistics/Statistics.jsx"
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Details_Page from "../Pages/Details_Page/Details_Page.jsx";
import Error_page from "../Pages/Error_page/Error_page.jsx";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error_page></Error_page>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics> </Statistics>,
      },
      {
        path:"/cards/:id",
        element:<Details_Page></Details_Page>,
        loader: ()=>fetch('data.json')
        // loader:({params}=>)
      }
    ],
  },
  
]);

export default myCreatedRoute;
