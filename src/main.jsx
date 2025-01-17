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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Layout/Dashboard";
import MyProfile from "./pages/Dashboard/UserDashboard/MyProfile";
import MyApplication from "./pages/Dashboard/UserDashboard/MyApplication";
import AddScholarship from "./pages/Dashboard/AdminDashboard/AddScholarship";
import AdminRoute from "./routes/AdminRoute";
import ManageUsers from "./pages/Dashboard/AdminDashboard/ManageUsers";
import ManageScholarship from "./pages/Dashboard/AdminDashboard/ManageScholarship";

const queryClient = new QueryClient();

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/scholarship/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      // admin routes
      {
        path: 'addScholarship',
        element: <AdminRoute><AddScholarship></AddScholarship></AdminRoute>
      },
      {
        path: 'manageScholarship',
        element: <AdminRoute><ManageScholarship></ManageScholarship></AdminRoute>
      },
      {
        path: 'user',
        element: <ManageUsers></ManageUsers>
      },
      // normal users routes
      {
        path: 'myApply',
        element: <MyApplication></MyApplication>
      },
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
