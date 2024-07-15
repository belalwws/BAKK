import React from "react";
import { motion, pipe } from "framer-motion";
import { fadeIn } from "../../variant";

const WelcomBnner = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0, 0, 0.5)}
      initial="hidden"
      whileInView={"show"}
      class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div class="pr-2 md:mb-14 py-14 md:py-0">
        <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
          <span class="block w-full">
            WELCOME TO <span className="text-indigo-600">BAK-TECH COURSES</span>
          </span>{" "}
        </h1>
        <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          Unlock your potential with our comprehensive range of courses. Whether
          you're looking to develop new skills, advance your career, or explore
          a new hobby, we have something for everyone.{" "}
        </p>
        <div class="mt-4">
          <a
            href="#contact"
            class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
          >
            <span>Explore More</span>{" "}
          </a>
        </div>
      </div>

      <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </motion.div>
  );
};

export default WelcomBnner;
