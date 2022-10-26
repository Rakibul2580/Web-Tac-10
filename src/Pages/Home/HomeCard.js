import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  const { image_url, id, title } = item;
  return (
    <div className="border max-w-xs w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={image_url}
        alt=""
        className="saturate-200 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
        </div>
        <Link
          to="/"
          className="transition hover:delay-150 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
