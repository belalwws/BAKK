import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { toAboutUs } from "../contents";
import { toServices } from "../contents";
import { toContacttUs } from "../contents";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="   bg-gray-800 p-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className=" container">
        <nav className="bg-gray-800 p-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                BAK-TECH
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none focus:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                onClick={toAboutUs}
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                About Us
              </a>
              <a
                onClick={toServices}
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                Services
              </a>
              <a
                href="/Portofolio"
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                Portofolio
              </a>
              <a
                href="/Courses"
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                Courses
              </a>
              <a
                onClick={toContacttUs}
                className="text-white hover:text-yellow-400 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          {isOpen && (
            <motion.div
              variants={fadeIn("up", 0, 0, 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="md:hidden mt-4"
            >
              <a
                href="#"
                className="block text-white py-2 hover:text-yellow-400"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-white py-2 hover:text-yellow-400"
              >
                Services
              </a>
              <a
                href="/Portofolio"
                className="block text-white py-2 hover:text-yellow-400"
              >
                Portofolio
              </a>
              <a
                href="/Portofolio"
                className="block text-white py-2 hover:text-yellow-400"
              >
                Contact
              </a>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
