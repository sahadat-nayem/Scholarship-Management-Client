import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home";
import ErrorPage from "./components/ErrorPage";
import AllScholarship from "./pages/AllScholarship/AllScholarship";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/Login";
import AuthProvider from "./provider/AuthProvider";
import SignUp from "./pages/SignUp";
import ScholarshipDetails from "./pages/ScholarshipDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "AllScholarship",
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: "scholarshipDetails/:id",
        element: <ScholarshipDetails></ScholarshipDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/scholarship/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
