import React, { useContext } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Sidebar = ({ items }) => {
  const { user } = useContext(AuthContext);
  return (
    <aside className="w-full rounded-md sticky top-0 p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <div className="flex items-center p-2 space-x-4">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500"
              />
            ) : (
              <FaUserGraduate className="w-10 h-auto"></FaUserGraduate>
            )}
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <Link
                  to="/profile"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            {items?.map((item) => (
              <Link key={item.id} to={`/courses/detail/${item.id}`}>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
