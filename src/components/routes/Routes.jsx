import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../pages/home/Home";
import StoryDetail from "../pages/details/StoryDetail";
import { url } from "../../url/Url";
import PackageDetail from "../pages/details/PackageDetail";

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
        }
      ]
    },
  ]);