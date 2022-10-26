import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  const { d_img, title } = data;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <img src={d_img} alt="" />
              </div>
            </div>
            <div className="flex justify-around flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">{title}</h6>
              </div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;