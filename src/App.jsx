import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Contactus from "./Components/contactus";
import Projects from "./Components/projects";
import Footer from "./Components/footer";
import Aboutus from "./Components/aboutus";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Aboutus />
      <Contactus />
      <Projects />
      <Footer />

      <div className="fixed right-5 bottom-5">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onclick="backToTop()"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </main>
  );
};

export default App;
