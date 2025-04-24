import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Bookings from "../pages/Bookings/Bookings";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("./doctorsData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/bookings",
        loader: () => fetch("./doctorsData.json"),
        Component: Bookings,
      },
      {
        path: "/doctorDetails/:id",
        loader: () => fetch("./doctorsData.json"),
        Component: DoctorDetails,
      },
      {
        path: "/blogs",
        loader: () => fetch("./blogsData.json"),
        Component: Blogs,
      },
      {
        path: "/contacts",
        Component: ErrorPage,
      },
    ],
  },
]);
