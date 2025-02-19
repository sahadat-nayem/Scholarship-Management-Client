import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user-removebg-preview.png";
import useAdmin from "../hooks/useAdmin";
import { FaHome, FaUser } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink className="flex gap-1 hover:text-yellow-400 font-semibold" to="/">
      <FaHome className="size-4" /> Home
      </NavLink>
      <NavLink
        className="flex gap-1 hover:text-yellow-400 font-semibold"
        to="/AllScholarship"
      >
        <FaGoogleScholar className="size-4" /> All Scholarship
      </NavLink>
      {isAdmin ? (
        <>
          <NavLink
            className="flex gap-1 hover:text-yellow-400 font-semibold"
            to="/dashboard/addScholarship"
          >
            <RiAdminFill className="size-4" /> Admin Dashboard
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className="flex gap-1 hover:text-yellow-400 font-semibold"
            to="/dashboard/myApplication"
          >
            <FaUser className="size-4" /> User Dashboard
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-black bg-opacity-30 fixed w-full z-[100]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Our Scholarship</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {/* <Link to="/dashboard/cart" className="btn relative bg-green-800 rounded-full p-3 text-white lg:mr-5">
          <HiMiniShoppingCart />
            <div className="badge badge-secondary absolute top-0 left-5">+{cart.length}</div>
          </Link> */}
          <div className="">
            {user && user?.email ? (
              <div className="group relative">
                <img
                  className="size-12 rounded-full border-2 border-blue-900 transition-all duration-300"
                  src={user?.photoURL}
                  alt=""
                />
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded font-semibold text-black text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                  {user?.displayName}
                </span>
              </div>
            ) : (
              <div>
                <img className="size-10" src={userIcon} />
              </div>
            )}
          </div>
          {user && user?.email ? (
            <button
              onClick={handleLogOut}
              className="hover:text-yellow-400 font-semibold"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="hover:text-yellow-400 font-semibold pr-5"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
