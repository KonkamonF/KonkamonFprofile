import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Profile from "../components/Profile";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: "Profile", id: "profile-section" },
    { name: "Skills", id: "skills-section" },
    { name: "Experiences", id: "experiences-section" },
  ];

  const cssNavigate =
    "cursor-pointer text-center text-[#603F26] text-lg p-2 px-8  transition-colors hover:bg-[#FEFFA7] rounded-lg bg-[#D1BB9E] duration-100 ";

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="text-[#795353]">
      <div className="absolute mx-auto top-0 z-50 right-0 left-0 flex items-end flex-col">
        <div className="fixed flex items-start rounded-xl p-2  justify-around">
          {isOpen && (
            <div className="flex bg-[#D1BB9E] rounded-l-xl shadow-lg mt-4">
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
            className="mt-4 mr-4 cursor-pointer text-xl px-10 p-2 transition-colors hover:bg-[#FEFFA7] rounded-r-xl bg-[#D1BB9E] duration-100 text-[#795353]"
          >
            {isOpen ? <IoClose size={28} /> : <HiMenu size={25} />}
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
