import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCirclePlay } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hotel from "../assets/HotelFinalReal.mp4";
import Selfproject from "../assets/Selfproject.mp4";
import ImageCarousel from "./ImageCarousel";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import ExperiencesCard from "./ExperiencesCard";

export default function Experiences() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const toggleFullscreen = (video) => {
    setFullscreenVideo(video === fullscreenVideo ? null : video);
  };

  const [show, setShow] = useState(false);

  const handleScroll = () => {
    // ปรับค่า scrollY ให้สัมพันธ์กับขนาดจอ เพื่อให้แสดงผลลัพธ์บนมือถือ
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      // ปรับค่าจาก 1500 ให้ต่ำลงเพื่อการแสดงผลบนมือถือที่ง่ายขึ้น
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = [
    "Javascript",
    "Node.JS",
    "React",
    "Zustand",
    "JSON",
    "JWT",
    "Axios",
    "Express.js",
    "Multer",
    "Stripe",
    "Google API",
    "MySQL",
    "Joi",
    "Tailwind",
    "Swiper",
    "React Toastify",
    "Slick",
    "React Chart",
  ];

  const word = [
    "Javascript",
    "Node.JS",
    "React",
    "Use Context",
    "JSON",
    "JWT",
    "Axios",
    "Express.js",
    "Multer",
    "MySQL",
    "Joi",
    "Tailwind",
    "React Toastify",
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* ปรับ padding บนมือถือและเดสก์ท็อป */}
        <div className="p-4 sm:p-8">
          <div className="text-center mb-8 sm:mb-12 mt-2">
            {/* ปรับขนาดตัวอักษรสำหรับ responsive */}
            <p className="font-bold text-4xl sm:text-5xl">Experiences</p>
          </div>

          {/* ส่วนหลัก: Group Project & Self-Project */}
          {/*
            ปรับ Responsive:
            - flex-col: จัดวางเป็นคอลัมน์เดียวบนมือถือ (ค่าเริ่มต้น)
            - md:flex-row: เปลี่ยนเป็นแนวนอนเมื่อหน้าจอขนาด 'md' (768px) ขึ้นไป
            - md:justify-around: จัดระยะห่างระหว่างองค์ประกอบบนหน้าจอใหญ่
            - items-center: จัดองค์ประกอบให้อยู่ตรงกลาง (center) บนทุกขนาดจอ
            - gap-8: เพิ่มระยะห่างระหว่างโปรเจกต์บนมือถือ
          */}
          <div className="relative flex justify-center items-start flex-col md:flex-row gap-12 md:gap-4">
            {/* Project 1: Group Project */}
            {/*
              ปรับ Responsive:
              - w-full: ใช้ความกว้างเต็มบนมือถือ
              - md:w-5/12: ใช้ความกว้าง 5/12 ของหน้าจอใหญ่ เพื่อให้มีระยะห่างตรงกลาง
            */}
            <div className="w-full md:w-5/12 text-center space-y-4">
              <div
                onClick={() => toggleFullscreen("Hotel")}
                className={`bg-black p-4 sm:p-6 rounded-lg shadow-xl cursor-pointer ${
                  fullscreenVideo === "Hotel"
                    ? "fixed inset-0 z-50 bg-black flex items-center justify-center" // เพิ่ม flex/items/justify สำหรับวิดีโอเต็มจอ
                    : ""
                }`}
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls={fullscreenVideo === "Hotel"} // แสดง control เมื่อเต็มจอ
                  className={`cursor-pointer ${
                    fullscreenVideo === "Hotel"
                      ? "max-w-full max-h-full object-contain"
                      : "w-full h-[200px] sm:h-[300px] object-cover rounded-md" // ปรับความสูงสำหรับ responsive
                  }`}
                >
                  <source src={Hotel} type="video/mp4" />
                </video>
                {fullscreenVideo === "Hotel" && (
                  <button
                    className="absolute top-4 right-4 text-white bg-red-600 bg-opacity-70 px-4 py-2 rounded-full hover:bg-red-700 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenVideo(null);
                    }}
                  >
                    Close
                  </button>
                )}
              </div>
              <p className="font-bold text-2xl sm:text-3xl">Group Project</p>

              {/* ปุ่ม Visit Website */}
              <div className="flex justify-center">
                <a
                  href="https://hotel-book-client.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-blue-500 hover:text-blue-700 border-2 rounded-xl p-2 px-4 border-[#3b82f6] transition duration-300"
                >
                  <span>Visit Website</span>
                  <FaCirclePlay className="text-xl" />
                </a>
              </div>

              {/* ปุ่ม GitHub */}
              {/* จัดวางแนวนอนบนมือถือ แต่ถ้าแคบเกินไปจะยังคงเป็นคอลัมน์อยู่ */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://github.com/NuttavichBig/CC18-GroupProject-Client.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-black hover:bg-gray-100 border-2 rounded-xl p-2 px-4 border-[#000000] transition duration-300"
                >
                  <span>GitHub Client</span>
                  <AiFillGithub className="text-2xl" />
                </a>
                <a
                  href="https://github.com/NuttavichBig/CC18-GroupProject-Server.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-black hover:bg-gray-100 border-2 rounded-xl p-2 px-4 border-[#000000] transition duration-300"
                >
                  <span>GitHub Server</span>
                  <AiFillGithub className="text-2xl" />
                </a>
              </div>

              {/* Swiper (Library) */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-bold">Libraries Used</p>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  loop
                  slidesPerView={1}
                  className="w-1/2" // ให้ Swiper ไม่กว้างเกินไป
                >
                  {words.map((word, index) => (
                    <SwiperSlide key={index}>
                      <span className="font-semibold text-lg text-center flex justify-center items-center cursor-move py-1">
                        {word}
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="text-start leading-relaxed text-sm sm:text-base px-2">
                The “Hotel Book” project is focused on creating a user-friendly
                web application for booking hotels. Users can search for options
                based on location, date, and other preferences. Secure payment
                and membership benefits enhance the travel experience.
              </p>
            </div>

            {/* Project 2: Self-Project */}
            {/* ปรับ Responsive เหมือน Project 1 */}
            <div className="w-full md:w-5/12 text-center space-y-4">
              <div
                onClick={() => toggleFullscreen("Selfproject")}
                className={`bg-black p-4 sm:p-6 rounded-lg shadow-xl cursor-pointer ${
                  fullscreenVideo === "Selfproject"
                    ? "fixed inset-0 z-50 bg-black flex items-center justify-center"
                    : ""
                }`}
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls={fullscreenVideo === "Selfproject"}
                  className={`cursor-pointer ${
                    fullscreenVideo === "Selfproject"
                      ? "max-w-full max-h-full object-contain"
                      : "w-full h-[200px] sm:h-[300px] object-cover rounded-md"
                  }`}
                >
                  <source src={Selfproject} type="video/mp4" />
                </video>
                {fullscreenVideo === "Selfproject" && (
                  <button
                    className="absolute top-4 right-4 text-white bg-red-600 bg-opacity-70 px-4 py-2 rounded-full hover:bg-red-700 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenVideo(null);
                    }}
                  >
                    Close
                  </button>
                )}
              </div>
              <p className="font-bold text-2xl sm:text-3xl">Self-Project</p>

              {/* ปุ่ม Visit Website */}
              <div className="flex justify-center">
                <a
                  href="https://shutterroller.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-blue-500 hover:text-blue-700 border-2 rounded-xl p-2 px-4 border-[#3b82f6] transition duration-300"
                >
                  <span>Visit Website</span>
                  <FaCirclePlay className="text-xl" />
                </a>
              </div>

              {/* ปุ่ม GitHub */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://github.com/KonkamonF/ShutterRollerFront.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-black hover:bg-gray-100 border-2 rounded-xl p-2 px-4 border-[#000000] transition duration-300"
                >
                  <span>GitHub Client</span>
                  <AiFillGithub className="text-2xl" />
                </a>
                <a
                  href="https://github.com/KonkamonF/ShutterRollerBack.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md flex items-center space-x-2 text-black hover:bg-gray-100 border-2 rounded-xl p-2 px-4 border-[#000000] transition duration-300"
                >
                  <span>GitHub Server</span>
                  <AiFillGithub className="text-2xl" />
                </a>
              </div>

              {/* Swiper (Library) */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-bold">Libraries Used</p>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 1000, disableOnInteraction: false }}
                  loop
                  slidesPerView={1}
                  className="w-1/2"
                >
                  {word.map((word, index) => (
                    <SwiperSlide key={index}>
                      <span className="font-semibold text-lg text-center flex justify-center items-center cursor-move py-1">
                        {word}
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="text-start leading-relaxed text-sm sm:text-base px-2">
                The website will feature product listings, user accounts, users
                can be asking questions, payment deposits processing, order
                management, and admin can manage users information, check status
                deposit payment. It aims to provide a seamless online shopping
                experience for customers.
              </p>
            </div>
          </div>

          {/* ส่วนเสริม: Personal Experience และ Swiper รูปภาพ */}
           <ExperiencesCard/>
          <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto space-y-4">
            <ImageCarousel />

            <p className="font-bold text-xl sm:text-2xl pt-4">
              Personal Experience
            </p>
            <p className="leading-relaxed text-sm sm:text-base px-2">
              After six years of experience in customer service, I am eager to
              transition into the field of software development. My time in
              customer service has equipped me with **strong problem-solving,
              communication, and collaboration skills**. I am dedicated to
              applying software development skills in a new environment that
              fosters innovation and continuous learning. My goal is to grow as
              a developer while delivering applications that are both
              **functional and visually appealing**.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
