import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <div className="flex items-center p-2 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </a>
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
