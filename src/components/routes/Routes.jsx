import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../pages/home/Home";
import StoryDetail from "../pages/details/StoryDetail";
import { url } from "../../url/Url";
import PackageDetail from "../pages/details/PackageDetail";
import Blogs from "../pages/blogs/Blogs";
import GuideProfile from "../pages/details/GuideProfile";
import Login from "../authentication/Login";
import TourByType from "../pages/tourByType/TourByType";
import Register from "../authentication/Register";
import Dashboard from "../../dashboard/Dashboard";
import MyBookings from "../../dashboard/tourist/MyBookings";
import MyWishlist from "../../dashboard/tourist/MyWishlist";
import MyProfile from "../../dashboard/MyProfile";
import AddPackage from "../../dashboard/admin/AddPackage";
import ManageUsers from "../../dashboard/admin/ManageUsers";
import AssignedTours from "../../dashboard/guide/AssignedTours";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/stories/:id',
            element: <StoryDetail></StoryDetail>,
            loader: ({params}) => fetch(`${url}/stories/${params.id}`)
        },
        {
            path: '/packages/:id',
            element: <PackageDetail></PackageDetail>,
            loader: ({params}) => fetch(`${url}/packages/${params.id}`)
        },
        {
            path: '/types/:id',
            element: <TourByType></TourByType>,
            loader: ({params}) => fetch(`${url}/packages/${params.id}`)
        },
        {
            path: '/guides/:id',
            element: <GuideProfile></GuideProfile>,
            loader: ({params}) => fetch(`${url}/guides/${params.id}`)
        },
        {
            path: '/stories',
            element: <Blogs></Blogs>
        }
      ]
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element:<MyProfile></MyProfile>
            },
            {
                path: '/dashboard/user/bookings',
                element:<MyBookings></MyBookings>
            },
            {
                path: '/dashboard/user/wishlist',
                element:<MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/guide/assignedTours',
                element:<AssignedTours></AssignedTours>
            },
            {
                path: '/dashboard/admin/addPackage',
                element:<AddPackage></AddPackage>
            },
            {
                path: '/dashboard/admin/manageUsers',
                element:<ManageUsers></ManageUsers>
            }
        ]
    }
  ]);