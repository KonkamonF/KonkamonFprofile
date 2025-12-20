import React, { useEffect, useState } from "react";
import University from "../assets/University.png";
import utcc from "../assets/utcc.png";
import code from "../assets/code.png";
import { motion } from "framer-motion";

export default function Education() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShow(scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const educationData = [
    {
      img: utcc,
      year: "2025 - 2026",
      degree: "Master of Engineering",
      major: "Computer Engineering and Financial Technology",
      place: "University of the Thai Chamber of Commerce",
    },
    {
      img: University,
      year: "2013 - 2018",
      degree: "Bachelor Degree",
      major: "Business English",
      place: "Assumption University",
    },
    {
      img: code,
      year: "2024",
      degree: "Certificate",
      major: "Software Park CodeCamp #18",
      place: "Full-Stack JavaScript Developer",
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title: Minimal Style */}
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.5em] text-[#9E7676] font-medium mb-2">
            Learning Path
          </h2>
          <div className="text-4xl md:text-5xl font-light text-[#603F26]">
            Edu<span className="font-bold">cation</span>
          </div>
          <div className="h-[1px] w-12 bg-[#D1BB9E] mx-auto mt-6"></div>
        </div>

        {/* Education Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group"
            >
              {/* Image Container with Soft Glow */}
              <div className="relative mb-8">
                {/* แสง Glow ด้านหลังเมื่อ Hover */}
                <div className="absolute inset-0 bg-[#D1BB9E] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <img
                  src={edu.img}
                  alt={edu.place}
                  /* เปลี่ยนจาก grayscale เป็น opacity-60 (สว่างเห็นสีจางๆ) 
                    และเมื่อ hover จะเป็น opacity-100 (สีชัดเจน) 
                  */
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain grayscale-[0.7] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="text-center space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#9E7676] bg-[#D1BB9E]/20 px-3 py-1 rounded-full">
                  {edu.year}
                </span>
                
                <h3 className="text-lg font-bold text-[#603F26] mt-4 leading-tight">
                  {edu.degree}
                </h3>
                
                <p className="text-[#795353] font-medium text-sm md:text-base px-4">
                  {edu.major}
                </p>
                
                <p className="text-[#9E7676] text-xs uppercase tracking-wider mt-2 font-light">
                  {edu.place}
                </p>
              </div>

              {/* Minimalist Divider for mobile */}
              {index !== educationData.length - 1 && (
                <div className="w-px h-12 bg-gradient-to-b from-[#D1BB9E] to-transparent mt-12 md:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}