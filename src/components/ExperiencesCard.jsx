import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "ERP Odoo System Programmer",
    duration: "1 Year",
    details:
      "Developed and customized Odoo ERP system modules, enhancing business processes and operational efficiency.",
    category: "Development",
  },
  {
    title: "Hospital Customer Service",
    duration: "1 Year",
    details:
      "Provided empathetic and efficient support to patients and visitors, ensuring high satisfaction in a fast-paced environment.",
    category: "Service",
  },
  {
    title: "Full-Stack Developer",
    duration: "6 Months",
    details:
      "Built responsive web applications from the ground up, working across front-end (React) and back-end (Node.js/Express).",
    category: "Development",
  },
  {
    title: "Hospital Customer Service",
    duration: "1 Year",
    details:
      "Provided empathetic and efficient support to patients and visitors, ensuring high satisfaction in a fast-paced environment.",
    category: "Service",
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="relative flex flex-col p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-[#D1BB9E]/30 shadow-sm hover:shadow-xl transition-all duration-500 group"
    >
      {/* Category Tag */}
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#9E7676] font-bold mb-4">
        {experience.category}
      </span>

      <h3 className="text-2xl font-bold text-[#603F26] leading-tight mb-4 group-hover:text-[#4A3428] transition-colors">
        {experience.title}
      </h3>

      <div className="flex items-center gap-2 mb-6">
        <div className="h-[1px] w-4 bg-[#D1BB9E]"></div>
        <span className="text-sm font-semibold text-[#795353] italic">
          {experience.duration}
        </span>
      </div>

      <p className="text-[#795353]/80 leading-relaxed text-sm font-light">
        {experience.details}
      </p>

      {/* Subtle background decoration */}
      <div className="absolute -bottom-2 -right-2 text-6xl opacity-[0.03] font-bold pointer-events-none select-none">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export default function ExperiencesCard() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Minimal Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.5em] text-[#9E7676] font-medium mb-4"
        >
          Career Path
        </motion.h2>

        <h1 className="text-4xl md:text-5xl font-light text-[#603F26]">
          Professional <span className="font-bold">Journey</span>
        </h1>

        <div className="h-[1px] w-12 bg-[#D1BB9E] mx-auto mt-6"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
