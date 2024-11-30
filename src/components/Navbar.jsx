import React from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const cssNavigate =
    "cursor-pointer hover:text-[#FF8787] hover:border-b hover:border-[#FF8787]";

  return (
    <div className="navbar">
      <div className="flex items-center justify-center flex-col">
        <img src={Logo} alt="Logo" className="w-[130px]" />
        <div className="flex gap-14">
          <p className={cssNavigate}>Skills</p>
          <p className={cssNavigate}>Experiences</p>
          <p className={cssNavigate}>Profile</p>
        </div>
      </div>
    </div>
  );
}
