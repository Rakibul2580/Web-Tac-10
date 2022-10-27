import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  const { image_url, title } = item;
  return (
    <div className="max-w-full w-full rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
      <img
        src={image_url}
        alt=""
        className="saturate-200 w-full rounded-t-md h-96 p-3 dark:bg-gray-200"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
        </div>
        <Link
          to="/courses"
          className="transition hover:delay-150 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
