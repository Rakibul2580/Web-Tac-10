import React, { useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { image_url, title, price } = data;

  const componentRef = useRef();
  const handlePdf = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Your-Course",
    onAfterprint: () => alert("good job"),
  });

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="p-px transition duration-300 transform border rounded-md shadow-sm hover:scale-105 group hover:shadow-xl">
          <div
            ref={componentRef}
            className="flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row"
          >
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <img src={image_url} alt="" />
              </div>
            </div>
            <div className="flex-col justify-center ">
              <h6 className="mb-2 text-3xl font-bold leading-5">{title}</h6>
              <p className="my-3 text-md font-medium text-red-400">
                Price: ${price}
              </p>
              <button
                onClick={handlePdf}
                className="bg-gray-300 p-3 text-md rounded-md inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                download pdf
              </button>
            </div>
          </div>
        </div>
        <div
          ref={componentRef}
          className="relative p-px overflow-hidden transition duration-300 transform border rounded-md shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                <img src={image_url} alt="" />
              </div>
            </div>
            <div className="flex-col justify-center ">
              <h6 className="mb-2 text-3xl font-bold leading-5">
                {user?.displayName}
              </h6>
              <p className="my-3 text-md font-medium text-red-400">
                {user?.email}
              </p>
              <button
                onClick={handlePdf}
                className="bg-gray-300 p-3 text-md rounded-md inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                download pdf
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
