import React, { useState } from "react";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Contact from "../components/Context";
import Education from "../components/Education";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: "Profile", id: "profile-section" },
    { name: "Skills", id: "skills-section" },
    { name: "Experiences", id: "experiences-section" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="text-[#795353] bg-[#F9F4F0] min-h-screen pb-20 md:pb-0">
        {/* Navigation Container */}
        <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* 1. Mobile Toggle Button (ย้ายมาบนสุดแล้ว) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-14 w-14 flex items-center justify-center bg-[#D1BB9E] text-[#603F26] shadow-lg rounded-full transition-all duration-300 active:scale-75 mb-3"
            >
              {/* Animation หมุนไอคอนเล็กน้อยตอนสลับ */}
              <div
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {isOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
              </div>
            </button>

            {/* 2. Mobile Dropdown (ปรับ Motion ให้ชัดขึ้น) */}
            <div
              className={`md:hidden w-full max-w-[200px] bg-white/90 backdrop-blur-lg border border-[#D1BB9E]/30 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform origin-top ${
                isOpen
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-50 opacity-0 -translate-y-10 pointer-events-none"
              }`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleScroll(tab.id)}
                  className="w-full p-4 text-[#603F26] font-medium border-b border-[#D1BB9E]/10 last:border-none active:bg-[#D1BB9E]/20 transition-colors"
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* 3. Desktop Menu (คงเดิม) */}
            <div className="hidden md:flex bg-white/70 backdrop-blur-md border border-[#D1BB9E]/30 p-1.5 rounded-full shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleScroll(tab.id)}
                  className="px-8 py-2.5 rounded-full text-[#603F26] font-medium transition-all hover:bg-[#D1BB9E] hover:text-[#F9F4F0]"
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content Sections - ปรับ pt ให้ไม่โดนปุ่มทับ */}
        <div className="pt-4 md:pt-20" id="profile-section">
          <Profile />
        </div>
        <div>
          <Education />
        </div>
        <div className="pt-4" id="skills-section">
          <Skills />
        </div>
        <div className="pb-4" id="experiences-section">
          <Experiences />
        </div>
        <div className="pb-4" id="contact-section">
          <Contact />
        </div>
      </div>
    </>
  );
}
