import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import a1 from "../assets/A1.png";
import Education from "./Education";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShow(scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 font-sans text-[#4A3428]">
      {/* ส่วนรูปภาพ - ปรับให้ดูเป็น Art Gallery */}
      <div className="flex flex-col items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D1BB9E] to-[#EAD8C0] rounded-full blur opacity-25"></div>
          <img
            src={a1}
            alt="Profile"
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-transform"
          />
        </motion.div>
      </div>

      {/* หัวข้อและชื่อ - ปรับ Typography ให้ Minimal */}
      <div className="text-center space-y-4 mb-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.4em] text-[#9E7676] font-medium"
        >
          Personal Portfolio
        </motion.h2>
        
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Konakmon <span className="font-bold text-[#603F26]">Fungsuk</span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-[#795353]/80 italic font-light">
          <span>( Ploy )</span>
          <span className="w-8 h-[1px] bg-[#D1BB9E]"></span>
          <span className="not-italic font-medium uppercase tracking-wider text-sm">Full Stack Developer</span>
        </div>
      </div>

      {/* GitHub Button - ปรับให้ดู Clean */}
      <div className="flex justify-center mb-16">
        <motion.a
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/KonkamonF"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-2 rounded-full border border-[#D1BB9E] text-[#603F26] transition-all hover:bg-[#603F26] hover:text-white hover:shadow-lg"
        >
          <span className="text-sm font-semibold tracking-wide">VIEW GITHUB</span>
          <AiFillGithub className="text-2xl" />
        </motion.a>
      </div>

      {/* Description - ปรับการวางข้อความให้อ่านง่ายขึ้น */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center mb-24"
      >
        <div className="relative p-8 border-y border-[#D1BB9E]/30">
          <p className="text-lg leading-relaxed font-light text-[#4A3428]/90">
            "Full Stack Developer with hands-on experience in designing,
            developing, and deploying web applications. Skilled in both frontend
            and backend technologies, with strong expertise in API development,
            database design, and system deployment."
          </p>
        </div>
      </motion.div>

      <Education />
    </section>
  );
}