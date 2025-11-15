import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from "./Layout/Root";
import Home from "./Page/Home/Home";
import Discover from "./Page/Discover/Discover";
import Services from "./Page/Services/Services";
import Testimonials from "./Page/Testimonials/Testimonials";
import Contact from "./Page/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element:<Home></Home>},
      {
        path: "/discover",
        element:<Discover></Discover>
      },
      {
        path: "/services",
        element:<Services></Services>
      },
      {
        path: "/testimonials",
        element:<Testimonials></Testimonials>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
