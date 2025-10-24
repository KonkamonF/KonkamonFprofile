import React, { useEffect, useState } from "react";
// import Circle from "../assets/Circle.png";
// import Arrow from "../assets/Arrow.png";
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
// import { motion } from "framer-motion";

// const skills = [
//   { src: Render, label: "Render" },
//   { src: Sql, label: "My SQL" },
//   { src: Git, label: "Git" },
//   { src: Node, label: "Node JS" },
//   { src: Prisma, label: "Prisma" },
//   { src: Tailwind, label: "Tailwind" },
//   { src: Css, label: "CSS" },
//   { src: Html, label: "HTML" },
//   { src: Figma, label: "Figma" },
//   { src: Js, label: "JavaScript" },
//   { src: Reacts, label: "React" },
//   { src: Postman, label: "Postman" },
// ];

// export default function Skills() {
//   const [show, setShow] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // กำหนดขนาด radius แบบ Responsive
//   let radius = 250;
//   if (windowWidth < 768) {
//     // ไม่สำคัญสำหรับ Mobile เพราะใช้ Grid
//     radius = 150;
//   } else if (windowWidth < 1024) {
//     // Tablet/Small Desktop
//     radius = 200;
//   } else {
//     // Large Desktop
//     radius = 250;
//   }

//   const center = { x: radius, y: radius };
//   const totalSkills = skills.length;

//   // * Effect สำหรับการจัดการ Scroll และ Window Resize
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     // ปรับค่า scrollY ให้เหมาะสมกับการใช้งานจริง (ประมาณ 900 หรือตามตำแหน่งที่ต้องการ)
//     if (scrollY > 900) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: show ? 1 : 0 }}
//       transition={{ duration: 0.9 }}
//       className="p-4 sm:p-8" // เพิ่ม Padding โดยรวม
//     >
//       <div>
//         <div className="text-center font-bold text-4xl sm:text-5xl mx-auto py-8 mb-12">
//           Skills 🛠️
//         </div>

//         {/*
//           ส่วนที่ 1: Circular Layout (Desktop/Tablet)
//         */}
//         <div className="relative mx-auto flex justify-center">
//           <div
//             className="hidden md:block relative"
//             style={{
//               width: `${radius * 2}px`,
//               height: `${radius * 2}px`,
//               margin: "auto",
//             }}
//           >
//             {/* Arrow/Circle Background */}
//             <img
//               src={Arrow}
//               alt="Circle Background"
//               className="absolute top-0 left-0 w-full h-full animate-spin-slow opacity-50"
//               style={{ animationDuration: '30s' }} // เพิ่มความช้าในการหมุน
//             />

//             {/* Skill Icons in Circle */}
//             {skills.map((skill, index) => {
//               const angle = (index / totalSkills) * 2 * Math.PI;
//               // ลบ 50 (ครึ่งหนึ่งของขนาด skill icon 100px) เพื่อให้อยู่ตรงกลางจุด
//               const x = center.x + radius * Math.cos(angle) - 50;
//               const y = center.y + radius * Math.sin(angle) - 50;

//               return (
//                 <div
//                   key={index}
//                   className="absolute"
//                   style={{
//                     top: `${y}px`,
//                     left: `${x}px`,
//                     width: "100px",
//                     height: "100px",
//                   }}
//                 >
//                   <div className="relative z-10 flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-xl
//                     transition duration-300 transform hover:scale-105 hover:bg-gray-50 border-b-4 border-transparent hover:border-pink-500">
//                     <img
//                       src={skill.src}
//                       alt={skill.label}
//                       className="w-[60px] h-[60px] object-contain" // ปรับขนาดไอคอน
//                     />
//                     <span className="text-center mt-1 text-sm font-semibold text-gray-700">
//                       {skill.label}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/*
//           ส่วนที่ 2: Grid Layout (Mobile/Small Screen)
//         */}
//         <div className="md:hidden max-w-lg mx-auto p-4">
//           <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="relative z-10 flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-md border-2 border-gray-100
//                   transition duration-300 transform hover:scale-105 hover:bg-gray-50 hover:border-pink-500"
//               >
//                 <img
//                   src={skill.src}
//                   alt={skill.label}
//                   className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain"
//                 />
//                 <span className="text-center mt-1 text-xs sm:text-sm font-semibold text-gray-700">
//                   {skill.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// import React, { useEffect, useState } from "react";
// Import paths have been simplified for this environment (Placeholders used for assets)
// const Arrow = "https://placehold.co/500x500/000000/ffffff?text=Arrow+Ring";
// const Html = Html;
// const Css = Css;
// const Reacts = Reacts;
// const Js = Js;
// const Node =Node;
// const Prisma = Prisma;
// const Tailwind = Tailwind;
// const Figma = Figma;
// const Git = Git;
// const Sql = Sql;
// const Postman = Postman;
// const Render = Render;

// (Framer Motion ถูกนำออกไป เนื่องจากใช้ได้เฉพาะในสภาพแวดล้อมที่รองรับการติดตั้งไลบรารี)

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

// ลบ Keyframe ของการหมุนออก เนื่องจากไม่ต้องการให้หมุนแล้ว
const NO_ANIMATION_KEYFRAMES = `
  .animate-spin-slow, .animate-spin-reverse {
    animation: none !important;
  }
`;

// แทนที่ 'Skills' ด้วย 'App' เพื่อให้ทำงานใน Canvas ได้
export default function App() {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // กำหนดขนาด radius แบบ Responsive
  let radius = 250;
  if (windowWidth < 768) {
    radius = 120; // ลด radius สำหรับ Mobile
  } else if (windowWidth < 1024) {
    radius = 200;
  } else {
    radius = 250;
  }

  const totalSkills = skills.length;
  // ปรับ center: จุดศูนย์กลางของวงกลมเสมือนอยู่ด้านล่าง
  const center = { x: radius * 1.5, y: radius * 0.9 }; // ปรับให้โค้งอยู่ตรงกลางจอ

  // * Effect สำหรับการจัดการ Scroll และ Window Resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // ตั้งค่า initial scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" pt-20 font-sans">
      {/* เพิ่ม CSS เพื่อยกเลิกแอนิเมชันเก่า */}
      <style>{NO_ANIMATION_KEYFRAMES}</style>
      <p className="font-bold text-5xl mb-24 text-center">Skill</p>

      {/* ใช้ opacity แบบง่ายๆ แทน Framer Motion */}
      <div
        style={{ opacity: show ? 1 : 0, transition: "opacity 0.9s" }}
        className="p-4 sm:p-8"
      >
        {/*
          ส่วนที่ 1: Semi-Circular Layout (Desktop/Tablet)
        */}
        <div className="relative mx-auto flex justify-center items-center">
          <div
            className="hidden md:block relative" // ใช้ overflow-hidden เพื่อซ่อนส่วนที่เกินขอบ
            style={{
              width: `${radius * 3}px`, // เพิ่มความกว้างให้รองรับส่วนโค้งที่กว้างขึ้น
              height: `${radius * 2}px`, // ความสูงยังคงเท่าเดิม
              margin: "auto",
            }}
          >
            {/* Image/Skill Icons in Semi-Circle */}
            {skills.map((skill, index) => {
              // 1. กำหนดช่วงองศา: 0 ถึง Math.PI (180 องศา)
              const startAngle = Math.PI; // เริ่มที่ 180 องศา (ซ้ายล่าง)
              const endAngle = 0; // จบที่ 0 องศา (ขวาบน)
              const angleRange = startAngle - endAngle;

              // คำนวณองศาสำหรับแต่ละ item
              const angle =
                startAngle - (index / (totalSkills - 1)) * angleRange;

              // 2. คำนวณตำแหน่ง (โดยใช้จุดศูนย์กลางที่ปรับแล้ว)
              // Center X ถูกปรับให้เป็น 1.5*radius เพื่อให้ส่วนโค้งอยู่ตรงกลางความกว้าง 3*radius
              const x = center.x + radius * Math.cos(angle) - 50;
              const y = center.y - radius * Math.sin(angle) - 50; // ใช้ -sin() เพื่อให้โค้งหงายขึ้น

              return (
                <div
                  key={index}
                  className="absolute group z-10"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    width: "100px",
                    height: "100px",
                    transition:
                      "transform 0.3s ease-out, box-shadow 0.3s ease-out",
                  }}
                >
                  <div
                    className="relative flex flex-col items-center justify-center rounded-2xl shadow-xl overflow-hidden 
                    w-full h-full transform transition duration-300 group-hover:scale-[1.3] group-hover:shadow-2xl group-hover:shadow-pink-500/50"
                  >
                    {/* ภาพ Skill (ใช้ Placeholder Image แทน) */}
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Overlay สำหรับชื่อ (ซ่อนไว้) */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-bold text-white text-center p-1">
                        {skill.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ปุ่ม Navigation ซ้าย-ขวา (จำลอง) */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition duration-300 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition duration-300 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/*
          ส่วนที่ 2: Grid Layout (Mobile/Small Screen) - ยังคงมีอยู่แต่เปลี่ยนสีพื้นหลังให้เข้ากัน
        */}
        <div className="md:hidden max-w-lg mx-auto p-4 mt-12">
          <h3 className="text-xl font-bold  mb-4 text-center">
            All Skills (Grid View)
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center justify-center p-2   rounded-lg shadow-md border-2 border-pink-700
                  transition duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:border-pink-500"
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain"
                />
                <span className="text-center mt-1 text-xs sm:text-sm font-semibold">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
