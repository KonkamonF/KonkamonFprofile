import React, { useState } from "react";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Contact from "../components/Context";

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
        <nav className="fixed bottom-6 left-0 right-0 z-50 px-4 md:top-6 md:bottom-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* Desktop Menu (Visible on md+) */}
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

            {/* Mobile Dropdown (Visible when isOpen on mobile) */}
            <div
              className={`md:hidden mb-4 w-full max-w-[200px] transition-all duration-300 transform origin-bottom ${
                isOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              } bg-white/90 backdrop-blur-lg border border-[#D1BB9E]/30 rounded-2xl shadow-lg overflow-hidden`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleScroll(tab.id)}
                  className="w-full p-4 text-[#603F26] font-medium border-b border-[#D1BB9E]/10 last:border-none active:bg-[#D1BB9E]/20"
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Mobile Toggle Button (Visible on mobile only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-14 w-14 flex items-center justify-center bg-[#D1BB9E] text-[#603F26] shadow-lg rounded-full transition-transform active:scale-90"
            >
              {isOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </nav>

        {/* Content Sections */}
        <div className="pt-10 md:pt-24" id="profile-section">
          <Profile />
        </div>
        <div className="py-20" id="skills-section">
          <Skills />
        </div>
        <div className="pb-20" id="experiences-section">
          <Experiences />
        </div>
          <div className="pb-20" id="experiences-section">
          <Contact/>
        </div>
      </div>
    </>
  );
}
