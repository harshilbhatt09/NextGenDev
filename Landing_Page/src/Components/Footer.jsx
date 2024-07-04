import React from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="xl:flex xl:justify-around py-3 mx-auto">
      <a href="https://www.instagram.com/thenextgendev/">
          <div className="flex py-1">
            <FaInstagram className="my-auto mx-2 text-2xl"/> @thenextgendev
          </div>
      </a>
      <a href="mailto:hi@nextgendev.in">
          <div className="flex py-1">
            <CiMail className="my-auto mx-2 text-2xl"/>hi@nextgendev.in
          </div>
      </a>
      <a href="tel:+919876543210">
          <div className="flex py-1">
            <IoCall className="my-auto mx-2 text-2xl"/>+91 98765 43210
          </div>
      </a>
    </footer>
  );
};

export default Footer;
