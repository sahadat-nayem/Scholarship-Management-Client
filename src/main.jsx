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
import UpdateScholarship from "./pages/Dashboard/AdminDashboard/UpdateScholarship";
import ManageApplied from "./pages/Dashboard/AdminDashboard/ManageApplied";
import AdminProfile from "./pages/Dashboard/AdminDashboard/AdminProfile";
import Payment from "./pages/Dashboard/UserDashboard/Payment/Payment";
import PrivateRoutes from "./routes/PrivateRoutes";
import AnalyticsChart from "./pages/Dashboard/AdminDashboard/AnalyticsChart";

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
        loader: () => fetch('https://assignment-12-server-phi-opal.vercel.app/scholarship/new')
      },
      {
        path: "AllScholarship",
        element: <PrivateRoutes><AllScholarship></AllScholarship></PrivateRoutes>,
      },
      {
        path: "scholarshipDetails/:id",
        element: <PrivateRoutes><ScholarshipDetails></ScholarshipDetails></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-phi-opal.vercel.app/scholarship/details/${params.id}`),
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
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>
      },
      {
        path: 'addScholarship',
        element: <AdminRoute><AddScholarship></AddScholarship></AdminRoute>
      },
      {
        path: 'updateScholarship/:id',
        element: <AdminRoute><UpdateScholarship></UpdateScholarship></AdminRoute>,
        loader: ({params}) => fetch(`https://assignment-12-server-phi-opal.vercel.app/scholarship/update/${params.id}`)
      },
      {
        path: 'manageScholarship',
        element: <AdminRoute><ManageScholarship></ManageScholarship></AdminRoute>
      },
      {
        path: 'manageApplied',
        element: <AdminRoute><ManageApplied></ManageApplied></AdminRoute>
      },
      {
        path: 'user',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'analytics',
        element: <AdminRoute><AnalyticsChart></AnalyticsChart></AdminRoute>
      },
      // normal users routes
      {
        path: 'myApplication',
        element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
      },
      {
        path: 'myProfile',
        element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
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
