import { useState } from "react";
import React from "react";
import { motion, pipe } from "framer-motion";
import { fadeIn } from "../../variant";
import "../../index.css";
import { courses } from "../../contents";

const CourseCard = () => {
  const [arr, setarr] = useState(courses);

  return (
    <>
      <motion.section
        variants={fadeIn("up", 0, 0, 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="bg-white py-12 mt-80"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className=" text-center text-[40px] ">اخر الكورسات المضافه</h1>

          <section className="right-secton  flex mt-9 ">
            <>
              {arr.map((proj) => {
                return (
                  <div class=" course-card	m-5">
                    <img
                      src={proj.imgpath}
                      alt="Project Cover"
                      width={348}
                      height={348}
                    />

                    <div
                      style={{ direction: "rtl" }}
                      className="flex flex-col gap-2 p-2"
                    >
                      <h2 className=" title font-medium">{proj.courseTitle}</h2>
                      <h2 className="text-[20px] text-gray-400">
                        {proj.courseAuthor}
                      </h2>
                      <div className="flex gap-3 items-center ">
                        <h2 className="text-[22px] text-gray-400">
                          شاهد الكورس علي يوتيوب
                        </h2>

                        <img
                          className="mt-2"
                          height={30}
                          width={30}
                          src={proj.iconpath}
                          alt=""
                        />
                      </div>
                      <div className="flex justify-between ">
                        <h2 className="text-[22px]">مجاني</h2>
                        <div className="flex gap-2  items-center ">
                          <span>ساعتين ونصف</span>
                          <img
                            height={25}
                            width={25}
                            src="../../public/images/timer.png"
                            alt=""
                          />
                        </div>
                      </div>
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
};

export default CourseCard;
