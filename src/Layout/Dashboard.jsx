import { FaHome, FaSearch } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#9edabeae]">
        <ul className="menu p-4">
          {/* {isAdmin ? (
            <> */}
              {/* <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Scholarship.
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Applied Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  Manage Users.
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  Manage Review
                </NavLink>
              </li>
            </>
          ) : ( */}
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                {/* <IoWallet></IoWallet> */}
                My Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                <MdReviews />
                  My reviews
                </NavLink>
              </li>
            </>
          {/* )} */}
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