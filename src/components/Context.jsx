import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";

export default function Contact() {
  const contactData = [
    {
      icon: <HiOutlineMail className="text-2xl" />,
      label: "Email",
      value: "konkamonfungsuk@gmail.com",
      link: "mailto:konkamonfungsuk@gmail.com",
    },
    {
      icon: <HiOutlinePhone className="text-2xl" />,
      label: "Tel",
      value: "098-292-4147",
      link: "tel:0982924147",
    },
    {
      icon: <RiLineLine className="text-2xl" />,
      label: "Line ID",
      value: "Ployfungsuk",
      link: "https://line.me/ti/p/~Ployfungsuk", // ลิงก์สำหรับกดแล้วเพิ่มเพื่อนใน Line ทันที
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header ส่วนหัว */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.5em] text-[#9E7676] font-medium">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-[#603F26] mt-2">
            Con<span className="font-bold">tact Me</span>
          </h1>
          <div className="h-[1px] w-12 bg-[#D1BB9E] mx-auto mt-6"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mb-6 rounded-full bg-[#D1BB9E]/20 text-[#603F26] flex items-center justify-center group-hover:bg-[#603F26] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>

              {/* Label & Value */}
              <p className="text-[14px] uppercase tracking-[0.3em] text-[#9E7676] font-bold mb-2">
                {item.label}
              </p>
              <h3 className="text-[14px] text-base font-medium text-[#603F26] break-all text-center">
                {item.value}
              </h3>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-[#795353]/60 font-light text-sm italic">
            "I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions."
          </p>
          <div className="mt-8 text-[10px] tracking-widest text-[#D1BB9E] uppercase">
            © 2025 Konakmon Fungsuk. All rights reserved.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
