import React from "react";
import WelcomBnner from "./coursesComponents/WelcomBnner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import CourseCard from "./coursesComponents/CourseCard";
const Courses = () => {
  return (
    <main>
      <Navbar />

      <WelcomBnner />
      <CourseCard />
      <Footer />
    </main>
  );
};

export default Courses;
