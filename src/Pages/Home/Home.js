import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import HomeCard from "./HomeCard";

const Home = () => {
  const { items } = useContext(AuthContext);
  return (
    <div className="dark:text-gray-100">
      <div className="flex flex-col mx-auto overflow-hidden">
        <div className="saturate-200 bg-center bg-no-repeat bg-cover bg-[url('https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg')]">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
              best music for coding developers recommend
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white">
              Learning arbitrary coding concepts can get boring after some time.
              To keep your motivation up, think of all the things you've always
              wanted to create.
            </p>
            <div className="flex flex-wrap justify-center">
              <Link
                to="/courses"
                className="bg-slate-400 px-8 py-3 m-2 text-lg font-semibold rounded dark:text-slate-900  duration-300 hover:bg-pink-400 hover:text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="z-10 p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <HomeCard key={item.id} item={item}></HomeCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
