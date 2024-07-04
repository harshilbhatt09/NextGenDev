import React from "react";
import { FaTaxi } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-[#FFFF00]">
      <nav className="flex justify-between px-6 xl:px-24 py-6 font-oswald">
        <div className="tracking-wider text-2xl leading-10 flex"><FaTaxi className="mt-2 mr-2" />Akshar Taxi</div>
        {/* <div className="leading-10">
          <ul className="flex justify-between space-x-4">
            <li>Rent a Cab</li>
            <li>About Us</li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
