import { useState } from "react";
import React from "react";
import { motion, pipe } from "framer-motion";
import { fadeIn } from "../variant";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { portofolio } from "../contents";
export default function Projects() {
  const [arr, setarr] = useState(portofolio);
  const navigate = useNavigate();

  const portofolioLink = () => {
    navigate("/portofolio");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <motion.section
        variants={fadeIn("up", 0, 0, 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="bg-white py-12 mt-52"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex  justify-center">
            <h2 className=" text-center text-3xl mb-6">Last Projects</h2>
          </div>
          <section className="right-secton flex mt-9 ">
            <>
              {arr.map((proj) => {
                return (
                  <div
                    key={proj.id}
                    className="card animate__animated animate__fadeInUp"
                  >
                    <img
                      src={proj.imgpath}
                      alt="Project Cover"
                      className="card-image"
                    />
                    <div className="card-content">
                      <h2 className="card-title animate__animated animate__fadeInDown">
                        {proj.projectTitle}
                      </h2>
                      <p className="card-description animate__animated animate__fadeIn">
                        {proj.description}
                      </p>
                      <div className="card-languages animate__animated animate__fadeIn">
                        <span className="language-tag html-tag"> HTML</span>
                        <span className="language-tag css-tag">CSS</span>
                        <span className="language-tag js-tag">JavaScript</span>
                      </div>
                      <a
                        target="blank"
                        href={proj.sourcelink}
                        className="card-link"
                      >
                        Source code
                      </a>
                      <a
                        target="blank"
                        href={proj.viewlink}
                        className="card-link ml-2"
                      >
                        view
                      </a>
                    </div>
                  </div>
                );
              })}
            </>
          </section>
          <button
            onClick={portofolioLink}
            class=" flex ml-auto mr-auto mt-3 bg-slate-600 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-slate-800  active:bg-purple-900 focus:outline-none"
          >
            Show All
          </button>
        </div>
      </motion.section>
    </>
  );
}
