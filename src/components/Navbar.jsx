import React from "react";

export default function Navbar() {
  const cssNavigate =
    "cursor-pointer hover:text-[#FF8787] hover:border-b hover:border-[#FF8787]";

  return (
    <div className="navbar">
      <div className="flex items-center justify-center flex-col">
        <div className="flex gap-14">
          <p className={cssNavigate}>Skills</p>
          <p className={cssNavigate}>Experiences</p>
          <p className={cssNavigate}>Profile</p>
        </div>
      </div>
    </div>
  );
}
