import React from "react";
import Circle from "../assets/Circle.png";
import Arrow from "../assets/Arrow.png";
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

export default function Skills() {
  const radius = 250;
  const center = { x: radius, y: radius };
  const totalSkills = skills.length;

  return (
    <>
      <div className="">
      <div className="text-center font-bold text-5xl mx-auto py-14">
            Skills
          </div>
        <div
          className="relative top-[50px] mx-auto"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            margin: "auto",
          }}
        >
       
          <img
            src={Arrow}
            alt="Circle Background"
            className="absolute top-0 left-0 w-full h-full animate-spin-slow"
          />
          {skills.map((skill, index) => {
            const angle = (index / totalSkills) * 2 * Math.PI;
            const x = center.x + radius * Math.cos(angle) - 50;
            const y = center.y + radius * Math.sin(angle) - 50;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  width: "100px",
                  height: "100px",
                }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center p-1 hover:bg-[#ffd6e3] rounded-lg  hover:w-[90px] hover:border-b-4 hover:border-[#F35588]">
                  <img
                    src={skill.src}
                    alt={skill.label}
                    className="w-[70px] h-[70px]"
                  />
                  <span className="text-center mt-2 font-semibold">
                    {skill.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
