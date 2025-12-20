import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaCirclePlay } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

// Assets
import Hotel from "../assets/HotelFinalReal.mp4";
import Selfproject from "../assets/Selfproject.mp4";
import ImageCarousel from "./ImageCarousel";
import ExperiencesCard from "./ExperiencesCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Experiences() {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hotelStack = ["Javascript", "Node.JS", "React", "Zustand", "Stripe", "MySQL", "Tailwind"];
  const selfStack = ["Javascript", "Node.JS", "React", "JWT", "Axios", "Express.js", "MySQL", "Tailwind"];

  const ProjectCard = ({ title, video, githubClient, githubServer, website, description, stack, id }) => (
    <div className="w-full md:w-[48%] bg-white/40 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 group">
      {/* Video Preview */}
      <div 
        onClick={() => setFullscreenVideo(id)}
        className="relative overflow-hidden rounded-[2rem] bg-[#603F26] aspect-video mb-8 shadow-inner cursor-zoom-in group-hover:shadow-2xl transition-all duration-500"
      >
        <video autoPlay loop muted className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all flex items-center justify-center">
          <FaCirclePlay className="text-white/50 text-5xl group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#603F26] tracking-tight">{title}</h3>
        
        {/* Buttons Section */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a href={website} target="_blank" rel="noreferrer" 
             className="px-6 py-2 bg-[#603F26] text-white rounded-full text-sm font-medium hover:bg-[#4A3428] transition-colors shadow-lg">
            Visit Website
          </a>
          <div className="flex gap-2">
            <a href={githubClient} target="_blank" rel="noreferrer" 
               className="p-2 border border-[#D1BB9E] text-[#603F26] rounded-full hover:bg-[#D1BB9E]/20 transition-all shadow-sm">
              <AiFillGithub size={20} />
            </a>
            <a href={githubServer} target="_blank" rel="noreferrer" 
               className="p-2 border border-[#D1BB9E] text-[#603F26] rounded-full hover:bg-[#D1BB9E]/20 transition-all shadow-sm">
              <AiFillGithub size={20} />
            </a>
          </div>
        </div>

        {/* Stack Slider: Minimal Style */}
        <div className="py-4 border-y border-[#D1BB9E]/20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9E7676] mb-3 font-bold text-center md:text-left">Tech Stack</p>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500 }}
            loop={true}
            slidesPerView={3}
            className="w-full"
          >
            {stack.map((s, i) => (
              <SwiperSlide key={i}>
                <span className="text-xs font-medium text-[#795353]">{s}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="text-sm leading-relaxed text-[#795353]/90 text-left font-light">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.5em] text-[#9E7676] font-medium">Selected Works</span>
          <h1 className="text-4xl md:text-5xl font-light text-[#603F26] mt-2">
            Expe<span className="font-bold">riences</span>
          </h1>
          <div className="h-[1px] w-12 bg-[#D1BB9E] mx-auto mt-6"></div>
        </div>

        {/* Projects Layout */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 mb-32">
          <ProjectCard 
            id="Hotel"
            title="Group Project: Hotel Book"
            video={Hotel}
            website="https://hotel-book-client.onrender.com/"
            githubClient="https://github.com/NuttavichBig/CC18-GroupProject-Client.git"
            githubServer="https://github.com/NuttavichBig/CC18-GroupProject-Server.git"
            stack={hotelStack}
            description="Focused on creating a user-friendly web application for booking hotels with secure payment and membership benefits."
          />
          <ProjectCard 
            id="Self"
            title="Self-Project: ShutterRoller"
            video={Selfproject}
            website="https://shutterroller.onrender.com/"
            githubClient="https://github.com/KonkamonF/ShutterRollerFront.git"
            githubServer="https://github.com/KonkamonF/ShutterRollerBack.git"
            stack={selfStack}
            description="Product listings, order management, and admin dashboard providing a seamless online shopping experience."
          />
        </div>

        {/* Fullscreen Video Portal (Simulated) */}
        {fullscreenVideo && (
          <div className="fixed inset-0 z-[100] bg-[#603F26]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
            <button 
              onClick={() => setFullscreenVideo(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-all text-xl uppercase tracking-widest font-bold"
            >
              Close [x]
            </button>
            <video autoPlay controls className="max-w-full max-h-full rounded-2xl shadow-2xl">
              <source src={fullscreenVideo === "Hotel" ? Hotel : Selfproject} type="video/mp4" />
            </video>
          </div>
        )}

        <ExperiencesCard />

        {/* Personal Bio Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto space-y-10">
          <ImageCarousel />
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#603F26]">Personal Journey</h2>
            <p className="text-lg leading-relaxed text-[#795353] font-light italic">
              "After six years in customer service, I am transitioning into software development. 
              My background has equipped me with <span className="text-[#603F26] font-bold">problem-solving and collaboration skills</span>. 
              My goal is to deliver applications that are both functional and visually captivating."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}