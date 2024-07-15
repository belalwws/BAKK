import Lottie from "lottie-react";
import dev from "../assets/dev.json";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
const Hero = () => {
  return (
    <section className="wave-header bg-gray-800 ">
      <div class=" max-sm:hidden custom-shape-divider-bottom-1719426920">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="hero-section container mx-auto  ">
        <motion.div
          variants={fadeIn("up", 0, 0, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="paragraph text-white  mt-28 "
        >
          <h1 className=" mb-[20px] ">Welcome to BAK-TECH</h1>
          <b>
            At BAK-TECH, we specialize in front-end development, back-end
            development, and machine learning services. Our goal is to help your
            business thrive in the digital age by providing innovative,
            high-quality solutions that drive growth and efficiency.
          </b>
          <div>
            <a href="#" className="hover:text-yellow-400">
              Contact us
              <hr className=" border-blue-600 size-8  " />
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact us
              <hr className=" border-red-600 size-8" />
            </a>
          </div>
        </motion.div>

        <div
          style={{ width: "50%", marginLeft: "50px" }}
          className="cool-animation animation text-white mt-44 "
        >
          <Lottie animationData={dev} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
