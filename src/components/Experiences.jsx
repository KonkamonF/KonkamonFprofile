import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCirclePlay } from "react-icons/fa6";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hotel from "../assets/HotelFinalReal.mp4";
import Selfproject from "../assets/Selfproject.mp4";
import G from "../assets/G.jpg";
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import H from "../assets/H.jpg";
import { AiFillGithub } from "react-icons/ai";

export default function Experiences() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const toggleFullscreen = (video) => {
    setFullscreenVideo(video === fullscreenVideo ? null : video);
  };

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
    <div className="p-8">
      <div className="text-center mb-12">
        <p className="font-bold text-5xl ">Experiences</p>
      </div>
      <div className="relative flex justify-around items-start">
        <div className="w-1/3 text-center space-y-4">
          <div
            onClick={() => toggleFullscreen("Hotel")}
            className={`bg-black p-6 rounded-lg shadow-lg ${
              fullscreenVideo === "Hotel" ? "fixed inset-0 z-50 bg-black" : ""
            }`}
          >
            <video
              autoPlay
              loop
              muted
              className={`cursor-pointer ${
                fullscreenVideo === "Hotel"
                  ? "w-full h-full object-contain"
                  : "w-full h-[300px] object-cover"
              }`}
            >
              <source src={Hotel} type="video/mp4" />
            </video>
            {fullscreenVideo === "Hotel" && (
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenVideo(null);
                }}
              >
                Close
              </button>
            )}
          </div>
          <p className="font-bold text-3xl">Group Project</p>
          <div className="flex justify-center">
            <a
              href="https://hotel-book-client.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md flex items-center space-x-2 text-blue-500 hover:underline border-2 rounded-xl p-1 px-2 border-[#3b82f6]"
            >
              <span>Visit Website</span>
              <FaCirclePlay className="text-lg" />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex">
              <a
                href="https://github.com/NuttavichBig/CC18-GroupProject-Client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md flex items-center space-x-2 text-black hover:underline border-2 rounded-xl p-1 px-2 border-[#000000]"
              >
                <span>GitHub Client</span>
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
            <div className="flex">
              <a
                href="https://github.com/NuttavichBig/CC18-GroupProject-Server.git"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md flex items-center space-x-2 text-black hover:underline border-2 rounded-xl p-1 px-2 border-[#000000]"
              >
                <span>GitHub Server</span>
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex gap-8">
            <p className="text-lg">Library</p>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1000 }}
              loop
              slidesPerView={3}
              spaceBetween={10}
            >
              {words.map((word, index) => (
                <SwiperSlide key={index}>
                  <span className="font-semibold text-lg text-center flex items-center cursor-move">
                    {word}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="text-start leading-relaxed">
            The “Hotel Book” project is focused on creating a user-friendly web
            application for booking hotels. Users can search for options based
            on location, date, and other preferences. Secure payment and
            membership benefits enhance the travel experience.
          </p>
        </div>

        <div className="relative w-1/12 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-red-600"></div>
          <div className="w-1 h-[550px] bg-red-600"></div>
          <div className="w-8 h-8 rounded-full bg-red-600"></div>
        </div>

        <div className="w-1/3 text-center space-y-4">
          <div
            onClick={() => toggleFullscreen("Selfproject")}
            className={`bg-black p-6 rounded-lg shadow-lg h-full w-full ${
              fullscreenVideo === "Selfproject"
                ? "fixed inset-0 z-50 bg-black"
                : ""
            }`}
          >
            <video
              autoPlay
              loop
              muted
              className={`cursor-pointer ${
                fullscreenVideo === "Selfproject"
                  ? "w-full h-full object-contain"
                  : "w-full h-[300px] object-cover"
              }`}
            >
              <source src={Selfproject} type="video/mp4" />
            </video>
            {fullscreenVideo === "Selfproject" && (
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenVideo(null);
                }}
              >
                Close
              </button>
            )}
          </div>
          <p className="font-bold text-3xl">Self-Project</p>
          <div className="flex justify-center">
            <a
              href="https://shutterroller.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md flex items-center space-x-2 text-blue-500 hover:underline border-2 rounded-xl p-1 px-2 border-[#3b82f6]"
            >
              <span>Visit Website</span>
              <FaCirclePlay className="text-lg" />
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex">
              <a
                href="https://github.com/KonkamonF/ShutterRollerFront.git"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md flex items-center space-x-2 text-black hover:underline border-2 rounded-xl p-1 px-2 border-[#000000]"
              >
                <span>GitHub Client</span>
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
            <div className="flex">
              <a
                href="https://github.com/KonkamonF/ShutterRollerBack.git"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md flex items-center space-x-2 text-black hover:underline border-2 rounded-xl p-1 px-2 border-[#000000]"
              >
                <span>GitHub Server</span>
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex gap-8">
            <p className="text-lg">Library</p>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1000 }}
              loop
              slidesPerView={3}
              spaceBetween={10}
            >
              {word.map((word, index) => (
                <SwiperSlide key={index}>
                  <span className="font-semibold text-lg text-center flex items-center cursor-move">
                    {word}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="text-start leading-relaxed">
            The website will feature product listings, user accounts, users can
            be asking questions,payment deposits processing, order management,
            and admin can manage users information,check status deposit payment.
            It aims to provide a seamless online shopping experience for
            customers.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center max-w-4xl mx-auto space-y-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          autoplay={{ delay: 1500 }}
          pagination={{ clickable: true }}
          loop
          className="p-6 rounded-lg shadow-lg"
          style={{ height: "500px" }}
        >
          <SwiperSlide>
            <img
              src={G2}
              alt="Slide"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={G}
              alt="Slide 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={G1}
              alt="Slide 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={H}
              alt="Slide 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        <p className="font-bold text-xl">Personal Experience</p>
        <p className="leading-relaxed">
          After six years of experience in customer service, I am eager to
          transition into the field of software development. My time in customer
          service has equipped me with strong problem-solving, communication,
          and collaboration skills. I am dedicated to applying software
          development skills in a new environment that fosters innovation and
          continuous learning. My goal is to grow as a developer while
          delivering applications that are both functional and visually
          appealing.
        </p>
      </div>
    </div>
  );
}
