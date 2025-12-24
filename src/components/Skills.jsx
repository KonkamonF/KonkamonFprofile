import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Html from "../assets/Html.png";
import Css from "../assets/Css.png";
import Reacts from "../assets/React.png";
import Js from "../assets/Js.png";
import Node from "../assets/Node.png";
import Prisma from "../assets/Prisma.png";
import Tailwind from "../assets/Tailwind.png";
import Figma from "../assets/Figma.png";
import Git from "../assets/Git.png";
import Sql from "../assets/Sql.png";
import Postman from "../assets/Postman.png";
import Render from "../assets/Render.png";
import TextSkill from "./TextSkill";

const skills = [
  { src: Render, label: "Render" },
  { src: Sql, label: "MySQL" },
  { src: Git, label: "Git" },
  { src: Node, label: "Node JS" },
  { src: Prisma, label: "Prisma" },
  { src: Tailwind, label: "Tailwind" },
  { src: Css, label: "CSS" },
  { src: Html, label: "HTML" },
  { src: Figma, label: "Figma" },
  { src: Js, label: "JavaScript" },
  { src: Reacts, label: "React" },
  { src: Postman, label: "Postman" },
];

export default function Skills() {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      setShow(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive Radius
  const radius = windowWidth < 768 ? 140 : windowWidth < 1024 ? 200 : 280;
  const center = { x: radius * 1.5, y: radius * 1.1 };

  return (
    <section className="pt-20 overflow-hidden bg-transparent font-sans">
      {/* Title Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-[0.5em] text-[#9E7676]mb-4"
        >
          Expertise
        </motion.h2>
        <h1 className="text-4xl md:text-5xl font-light text-[#603F26]">
          Technical <span className="font-bold">Skills</span>
        </h1>
        <div className="h-[1px] w-12 bg-[#D1BB9E] mx-auto mt-6"></div>
      </div>

      {/* Desktop Semi-Circle Layout */}
      <div className="hidden md:flex justify-center items-center min-h-[400px] relative">
        <div 
          className="relative"
          style={{ width: `${radius * 3}px`, height: `${radius * 1.5}px` }}
        >
          {/* เส้นโค้งจางๆ Guide Line */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-[1px] border-[#D1BB9E]/20 rounded-full"
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, borderStyle: 'dashed' }}
          ></div>

          {skills.map((skill, index) => {
            const startAngle = Math.PI; // 180 deg
            const endAngle = 0; // 0 deg
            const angleRange = startAngle - endAngle;
            const angle = startAngle - (index / (skills.length - 1)) * angleRange;

            const x = center.x + radius * Math.cos(angle) - 45;
            const y = center.y - radius * Math.sin(angle) - 45;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.1 }}
                className="absolute z-10 group"
                style={{ top: `${y}px`, left: `${x}px` }}
              >
                <div className="relative flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-[#D1BB9E]/30 p-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-[#603F26]/50">
                    <img src={skill.src} alt={skill.label} className="w-full h-full object-contain grayscale-[0.8] group-hover:grayscale-0 transition-all" />
                  </div>
                  {/* Tooltip Label */}
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-[#603F26] uppercase tracking-tighter">
                    {skill.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden px-8">
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-[#D1BB9E]/20 p-3">
                <img src={skill.src} alt={skill.label} className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-bold text-[#9E7676] uppercase tracking-tighter">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ส่วน TextSkill ด้านล่าง
      <div className="mt-20">
        <TextSkill />
      </div> */}
    </section>
  );
}