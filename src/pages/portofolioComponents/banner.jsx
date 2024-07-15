import React from "react";
import { motion, pipe } from "framer-motion";
import { fadeIn } from "../../variant";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url('../../public/images/portfolio.jpg')`,
        backgroundSize: "contain",
      }}
      class="bg-black overflow-visible my-0 py-40"
    >
      <motion.div
        variants={fadeIn("up", 0, 0, 0.5)}
        initial="hidden"
        whileInView={"show"}
        class="text-white items-center text-center flex flex-col "
      >
        <h2 class="font-bold text-2xl lg:text-4xl">OUR WORKS</h2>

        <a
          href="/"
          class=" mt-20 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
        >
          <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p class="z-10">HOME</p>
        </a>
      </motion.div>
    </section>
  );
};

export default Banner;
