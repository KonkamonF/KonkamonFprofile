import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Profile from "../components/Profile";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: "Profile", id: "profile-section" },
    { name: "Skills", id: "skills-section" },
    { name: "Experiences", id: "experiences-section" },
  ];

  const cssNavigate =
    "cursor-pointer text-xl px-8 py-2 transition-colors hover:bg-[#FEFFA7] rounded-full bg-[#fbcfe8] duration-100 text-[#CC4B41]";

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="text-[#CC4B41]">
      <div className="absolute mx-auto top-0 z-50 right-0 left-0 flex items-end flex-col">
        <div className="fixed flex items-center rounded-xl p-2 justify-between">
          {isOpen && (
            <div className="flex space-x-4 bg-[#fbcfe8] rounded-full shadow-lg">
              {tabs.map((tab) => (
                <p
                  key={tab.id}
                  className={cssNavigate}
                  onClick={() => handleScroll(tab.id)}
                >
                  {tab.name}
                </p>
              ))}
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-xl px-8 py-2 transition-colors hover:bg-[#FEFFA7] shadow-lg rounded-full bg-[#fbcfe8] duration-100 text-[#CC4B41]"
          >
            {isOpen ? "X" : "More"}
          </button>
        </div>
      </div>

      <div className="py-24" id="profile-section">
        <Profile />
      </div>
      <div className="pb-[350px]" id="skills-section">
        <Skills />
      </div>
      <div className="pb-[50px]" id="experiences-section">
        <Experiences />
      </div>
    </div>
  );
}
