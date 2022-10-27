import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUserGraduate } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const naviget = useNavigate();

  // log out function
  const handlelogOut = () => {
    logOut();
    naviget("/");
  };
  return (
    <header className="p-3 transition bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:text-gray-100 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-violet-500 hover:dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://www.cincinnatiwebtec.com/wp-content/uploads/2019/09/webtec_logo_color.png"
            alt=""
            className="lg:52 w-40"
          />
        </Link>
        <label className="swap swap-rotate">
          <input type="checkbox" />

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <ul className="items-stretch hidden space-x-3 md:flex text-white">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "flex items-center px-4 -mb-1" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              Courses
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              FAQ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden md:flex">
          {user?.uid ? (
            <>
              <Link to="/profile">
                {user?.photoURL ? (
                  <div
                    className="tooltip tooltip-bottom z-10"
                    data-tip={user?.displayName}
                  >
                    <button>
                      <img
                        src={user.photoURL}
                        alt=""
                        className="rounded-full w-12 h-auto mr-5"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="tooltip" data-tip={user?.displayName}>
                    <button>
                      <FaUserGraduate className="w-10 h-auto mr-5"></FaUserGraduate>
                    </button>
                  </div>
                )}
              </Link>
              <button
                onClick={handlelogOut}
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="self-center px-8 py-3 rounded">
                Register
              </Link>
              <Link
                to="/login"
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Login
              </Link>
            </>
          )}
        </div>
        <div className="dropdown dropdown-end md:hidden ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content text-gray-900 bg-gray-100 rounded-box w-52"
          >
            <li className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "flex items-center px-4 -mb-1" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Courses
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Blog
              </NavLink>
            </li>
            {user?.uid ? (
              <>
                <Link to="/profile" className="flex justify-center">
                  {user?.photoURL ? (
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={user?.displayName}
                    >
                      <button>
                        <img
                          src={user.photoURL}
                          alt=""
                          className="rounded-full w-12 h-auto mr-5"
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="tooltip" data-tip={user?.displayName}>
                      <button>
                        <FaUserGraduate className="w-10 h-auto mr-5"></FaUserGraduate>
                      </button>
                    </div>
                  )}
                </Link>
                <button
                  onClick={handlelogOut}
                  className="self-center px-8 mt-3 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="self-center px-8 mt-1 py-3 rounded"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="self-center px-8 mt-2 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
