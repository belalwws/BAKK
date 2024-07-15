import { useState } from "react";
import React from "react";
import { motion, pipe } from "framer-motion";
import { fadeIn } from "../../variant";
import "../../index.css";
import { allportofolio } from "../../contents";
export default function PortofolioProiects() {
  const [arr, setarr] = useState(allportofolio);

  return (
    <>
      <motion.section
        variants={fadeIn("up", 0, 0, 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="bg-white py-12 mt-80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="right-secton flex mt-9 ">
            <>
              {arr.map((proj) => {
                return (
                  <div class="card animate__animated animate__fadeInUp m-5">
                    <img
                      src={proj.imgpath}
                      alt="Project Cover"
                      class="card-image"
                    />
                    <div class="card-content">
                      <h2 class="card-title animate__animated animate__fadeInDown">
                        {proj.projectTitle}
                      </h2>
                      <p class="card-description animate__animated animate__fadeIn">
                        {proj.description}
                      </p>
                      <div class="card-languages animate__animated animate__fadeIn">
                        <span class="language-tag html-tag ">{proj.tech1}</span>
                        <span class="language-tag css-tag">{proj.tech2}</span>
                        <span class="language-tag js-tag">{proj.tech3}</span>
                      </div>
                      <a
                        target="blank"
                        href={proj.sourcelink}
                        class="card-link"
                      >
                        <i class="fab fa-github"></i> Source code
                      </a>
                      <a
                        target="blank"
                        href={proj.viewlink}
                        class="card-link ml-2"
                      >
                        <i class="fab fa-github"></i> view
                      </a>
                    </div>
                  </div>
                );
              })}
            </>
          </section>
        </div>
      </motion.section>
    </>
  );
}
