// @ts-ignore
import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import FunRun from "./components/FunRun";
import Readathon from "./components/Readathon";
import ContactUs from "./components/ContactUs";
import LostAndFound from "./components/LostAndFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "fun-run",
        element: <FunRun />,
      },
      {
        path: "readathon",
        element: <Readathon />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "lost-and-found",
        element: <LostAndFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
