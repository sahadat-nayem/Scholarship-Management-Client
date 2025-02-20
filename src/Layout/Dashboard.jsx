import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FaBook, FaFileLines, FaList, FaUsers } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";


const Dashboard = () => {

  const [isAdmin] = useAdmin();

    return (
        <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#9edabeae]">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">
                <FaUser />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addScholarship">
                <IoSchoolSharp />
                  Add Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageScholarship">
                  <FaList></FaList>
                  Manage Scholarship.
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageApplied">
                  <FaBook></FaBook>
                  Manage Applied Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/user">
                  <FaUsers></FaUsers>
                  Manage Users.
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/analytics">
                <IoMdAnalytics />
                Analytics Dashboard
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                <FaUser />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myApplication">
                <FaFileLines />
                My Application
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/AllScholarship">
              <FaSearch></FaSearch>
              All Scholarships
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;