import React from "react";
import { FaAngleDoubleDown, FaAngleDoubleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <main className="bg-black text-white py-4 xl:py-32 xl:flex xl:justify-center xl:space-x-96">
        <div className="my-auto text-center text-4xl text-[#FFFF00]">
          Traffic? We've Got You Covered
          <form
            action="#"
            className="font-light text-base pt-3 items-center xl:flex"
          >
            <input
              type="text"
              placeholder="From where?"
              className="my-3 text-center text-black caret-transparent border-[#ffff00] rounded-full p-2"
            />
            <FaAngleDoubleDown className="mx-auto xl:hidden" />
            <FaAngleDoubleRight className="mx-auto hidden xl:block" />
            <input
              type="text"
              placeholder="To where?"
              className="my-3 text-center text-black caret-transparent border-[#ffff00] rounded-full p-2"
            />
          </form>
        </div>
        <div className="border rounded-lg m-5 border-[#ffff00]">
          <img className="h-96 mx-auto" src="../../src/assets/taxi_main.png" />
        </div>
      </main>
      <main className="bg-[#ffff00] py-4 xl:py-32 xl:flex xl:justify-evenly">
        <div className="border rounded-lg m-5 border-black">
          <img className="h-96 mx-auto" src="../../src/assets/taxi_2.png" />
        </div>
        <div className="my-auto text-center text-4xl xl:flex-row">
        Save Time and Money: <br/>Easily Find Affordable Taxis <br /> with Our Online Service
        </div>
      </main>
      <main className="bg-black text-[#ffff00] py-4 xl:py-32 xl:flex xl:justify-evenly">
        <div className="my-auto text-center text-4xl xl:flex-row">
        Drive Your Profits Up:  <br/>Taxi Owners Reap Rewards <br />with Our Online Service Platform
        </div>
        <div className="border rounded-lg m-5 border-[#ffff00]">
          <img className="h-96 mx-auto" src="../../src/assets/taxi_3.png" />
        </div>
      </main>
    </div>
  );
};

export default Banner;
