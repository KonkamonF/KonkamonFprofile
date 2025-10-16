import React, { useEffect, useState } from "react";
// import Circle from "../assets/Circle.png"; // ไม่ได้ใช้
import Arrow from "../assets/Arrow.png";
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
import { motion } from "framer-motion";

const skills = [
  { src: Render, label: "Render" },
  { src: Sql, label: "My SQL" },
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // กำหนดขนาด radius แบบ Responsive
  let radius = 250;
  if (windowWidth < 768) {
    // ไม่สำคัญสำหรับ Mobile เพราะใช้ Grid
    radius = 150; 
  } else if (windowWidth < 1024) {
    // Tablet/Small Desktop
    radius = 200; 
  } else {
    // Large Desktop
    radius = 250; 
  }
  
  const center = { x: radius, y: radius };
  const totalSkills = skills.length;

  // * Effect สำหรับการจัดการ Scroll และ Window Resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // ปรับค่า scrollY ให้เหมาะสมกับการใช้งานจริง (ประมาณ 900 หรือตามตำแหน่งที่ต้องการ)
    if (scrollY > 900) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.9 }}
      className="p-4 sm:p-8" // เพิ่ม Padding โดยรวม
    >
      <div>
        <div className="text-center font-bold text-4xl sm:text-5xl mx-auto py-8 mb-12">
          Skills 🛠️
        </div>
        
        {/*
          ส่วนที่ 1: Circular Layout (Desktop/Tablet)
        */}
        <div className="relative mx-auto flex justify-center">
          <div
            className="hidden md:block relative"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              margin: "auto",
            }}
          >
            {/* Arrow/Circle Background */}
            <img
              src={Arrow}
              alt="Circle Background"
              className="absolute top-0 left-0 w-full h-full animate-spin-slow opacity-50"
              style={{ animationDuration: '30s' }} // เพิ่มความช้าในการหมุน
            />
            
            {/* Skill Icons in Circle */}
            {skills.map((skill, index) => {
              const angle = (index / totalSkills) * 2 * Math.PI;
              // ลบ 50 (ครึ่งหนึ่งของขนาด skill icon 100px) เพื่อให้อยู่ตรงกลางจุด
              const x = center.x + radius * Math.cos(angle) - 50; 
              const y = center.y + radius * Math.sin(angle) - 50;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <div className="relative z-10 flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-xl 
                    transition duration-300 transform hover:scale-105 hover:bg-gray-50 border-b-4 border-transparent hover:border-pink-500">
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="w-[60px] h-[60px] object-contain" // ปรับขนาดไอคอน
                    />
                    <span className="text-center mt-1 text-sm font-semibold text-gray-700">
                      {skill.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*
          ส่วนที่ 2: Grid Layout (Mobile/Small Screen)
        */}
        <div className="md:hidden max-w-lg mx-auto p-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4"> 
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-md border-2 border-gray-100
                  transition duration-300 transform hover:scale-105 hover:bg-gray-50 hover:border-pink-500"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain"
                />
                <span className="text-center mt-1 text-xs sm:text-sm font-semibold text-gray-700">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}