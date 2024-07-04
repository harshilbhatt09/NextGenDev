import React from "react";
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <div className="text-5xl font-bold mb-3">
        Find your <span className="text-blue-600">new job</span> today
      </div>
      <p className="text-lg opacity-70 mb-8">
        We provide opportunities, You need to grab them...
      </p>
      <form>
        <div>
          <div className="flex space-x-10 md:rounded-s-md md:w-1/2 w-full">
          <FiSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position are you looking for ?"
              className="block flex-1 pl-6 border bg-transparent py-2 p1-8 text-gray-960 placeholder: text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
