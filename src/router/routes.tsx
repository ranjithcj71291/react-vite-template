import HomePage from "@/pages/home/Home";
import NotFound from "@/pages/notfound/NotFound";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const AppRoutes:RouteObject[] = [
    {
        path: "/",
        element:  ( <Navigate to="/home" />),
    },
    {
      path: "/home",
      element: HomePage({}),
    },


    {
      path: "*",
      element: NotFound({}),
    }
];


const router = createBrowserRouter(AppRoutes);

export default router;
