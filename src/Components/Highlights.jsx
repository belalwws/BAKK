import React, { useState } from "react";
import { services } from "../contents";
import { technologis } from "../contents";
import { industry } from "../contents";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Highlights = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [arr, setarr] = useState(services);
  const [tech, setech] = useState(technologis);
  const [indust, setindust] = useState(industry);

  return (
    <motion.div
      id="services"
      variants={fadeIn("up", 0, 0, 0.5)}
      initial="hidden"
      whileInView={"show"}
      className="bg-white py-12 mt-52  "
    >
      <div className="rounded-full  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="  rounded-full filter  space-x-4  text-white ml-auto mr-auto  flex items-center justify-between bg-slate-950 w-[50%]  text-center lg:w-ful">
          <button
            style={{ textAlign: "center", width: "33.33%" }}
            className={` rounded-full px-4 py-3  text-white font-bold    ${
              activeTab === 1 ? "bg-gray-800 text-white" : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            SERVICES
          </button>
          <button
            style={{ textAlign: "center", width: "33.33%" }}
            className={`rounded-full px-4 py-3 bg-blue-500 text-white font-bold ${
              activeTab === 2 ? "bg-gray-800 text-white" : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            TECHNOLOGIES
          </button>
          <button
            style={{ textAlign: "center", width: "33.33%" }}
            className={`rounded-full px-4 py-3 bg-blue-500 text-white font-bold ${
              activeTab === 3 ? "bg-gray-800 text-white" : ""
            }`}
            onClick={() => setActiveTab(3)}
          >
            INDUSTRY{" "}
          </button>
        </div>

        {/* services */}
        <div className="p-4">
          {activeTab === 1 && (
            <section className="right-secton flex mt-9 ">
              {arr.map((item) => {
                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{
                      type: "spring",
                      damping: 8,
                      stiffness: 50,
                    }}
                  >
                    <div className="w-80 max-w-sm  border-black rounded-lg  dark:bg-white dark:border-gray-700  hover:shadow-lg  transition-all">
                      <div className="flex justify-end px-4 pt-4"></div>
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-24 h-24 mb-3 rounded-full shadow-lg"
                          src={item.servicesimgpath}
                          alt="Bonnie image"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
                          {item.servicesTitle}
                        </h5>
                        <h5 className=" p-3 mb-1 text-gray-900">
                          {item.servicesdescription}
                        </h5>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </section>
          )}
          {/* technologies section */}
          {activeTab === 2 && (
            <section className="right-secton flex mt-9 ">
              {tech.map((item) => {
                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{
                      type: "spring",
                      damping: 8,
                      stiffness: 50,
                    }}
                  >
                    <div className="w-80 max-w-sm  border-black rounded-lg  dark:bg-white dark:border-gray-700  hover:shadow-lg  transition-all">
                      <div className="flex justify-end px-4 pt-4"></div>
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-24 h-24 mb-3 rounded-full shadow-lg"
                          src={item.technologIsmgpath}
                          alt="Bonnie image"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
                          {item.technologisTitle}
                        </h5>

                        <ul className=" list-disc mr-10">
                          <li>{item.tech1}</li>
                          <li>{item.tech2}</li>
                          <li>{item.tech3}</li>
                          <li>{item.tech4}</li>
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </section>
          )}
          {/* industry section */}

          {activeTab === 3 && (
            <section className="right-secton flex mt-9 ">
              {indust.map((item) => {
                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{
                      type: "spring",
                      damping: 8,
                      stiffness: 50,
                    }}
                  >
                    <div className="w-80 max-w-sm  border-black rounded-lg  dark:bg-white dark:border-gray-700  hover:shadow-lg  transition-all">
                      <div className="flex justify-end px-4 pt-4"></div>
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-24 h-24 mb-3 rounded-full shadow-lg"
                          src={item.industryIsmgpath}
                          alt="Bonnie image"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
                          {item.industryTitle}
                        </h5>

                        <h5 className="mb-1 p-3 text-gray-900">
                          {item.industryDescription}
                        </h5>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </section>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Highlights;
