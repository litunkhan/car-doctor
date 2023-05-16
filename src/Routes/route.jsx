import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Homes/Home";
import Login from "../pages/login/Login";
import Register from "../pages/singup/Register";
import Chekout from "../pages/chekout/Chekout";
import Bookings from "../pages/bookings/Bookings";
import Private from "../pages/private/Private";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/chekout/:id',
              element:<Private><Chekout></Chekout></Private>,
              loader:({params})=> fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
               path:'/bookings',
               element:<Bookings></Bookings>,
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
      ]
    },
  ]);
  export default router