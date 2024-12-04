import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import a1 from "../assets/A1.jpg";
import a3 from "../assets/A3.jpg";
import a from "../assets/a.jpg";
import Education from "./Education";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="flex gap-1 w-full justify-center pb-8">
          <img
            src={a}
            alt="Slide"
            className="w-[200px] h-[400px] object-cover rounded-lg hover:w-[400px]"
          />
          <img
            src={a1}
            alt="Slide"
            className="w-[200px] h-[400px] object-cover rounded-lg hover:w-[400px]"
          />

          <img
            src={a3}
            alt="Slide 3"
            className="w-[200px] h-[400px] object-cover rounded-lg hover:w-[400px]"
          />
        </div>
        <p className="font-bold text-5xl mb-10">Personal</p>
        <p className="font-semibold text-3xl animate-bounce">
          Miss Konakmon Fungsuk ( Ploy )
        </p>
      </div>
      <div className="text-center font-semibold text-3xl mb-4">
        Front-End Developer
      </div>

      <div className="flex justify-center mb-4">
        <a
          href="https://github.com/KonkamonF"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md flex items-center space-x-2 text-black hover:underline border-2 rounded-xl p-1 px-2 border-[#000000]"
        >
          <span className="text-xl">My GitHub</span>
          <AiFillGithub className="text-4xl" />
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex justify-center text-center mb-8">
          <div className="leading-relaxed w-[70%]">
            I am a passionate and detail-oriented Front-End Developer with a
            strong foundation in modern web technologies such as HTML, CSS,
            JavaScript, and frameworks like React js. I am dedicated to
            delivering seamless digital experiences that meet both user and
            business needs. I am constantly improving my skills by staying
            updated with the latest trends in front-end development and
            integrating best practices for performance optimization. As someone
            who values collaboration and effective communication, I thrive in
            team-oriented environments, contributing to efficient workflows and
            innovative solutions. My background in customer service has also
            equipped me with strong problem-solving abilities and an empathetic
            understanding of user needs, which I integrate into my development
            approach. I am eager to join a forward-thinking organization where I
            can grow my technical expertise while contributing to impactful
            projects. My goal is to build engaging, user-friendly applications
            that not only meet expectations but exceed them.
          </div>
        </div>
      </motion.div>
      <Education />
    </>
  );
}
