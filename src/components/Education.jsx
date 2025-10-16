import React, { useEffect, useState } from "react";
import University from "../assets/University.png";
import code from "../assets/code.png";
import { motion } from "framer-motion";

export default function Education() {
  const [show, setShow] = useState(false);

  // *ฟังก์ชันจัดการการเลื่อนหน้าจอ (Scrolling)
  const handleScroll = () => {
    // กำหนดให้แสดงเนื้อหาเมื่อเลื่อนลงมาเกิน 500px
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // *Effect สำหรับการเพิ่มและลบ Event Listener สำหรับการเลื่อนหน้าจอ
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="text-center font-semibold text-3xl mb-8">
          Education 🎓
        </div>
        
        {/*
          การปรับ Responsive:
          - flex-col: เป็นค่าเริ่มต้น (หน้าจอมือถือ) ให้อยู่ในแนวตั้ง
          - sm:flex-row: เมื่อหน้าจอขนาด 'sm' (640px) ขึ้นไป ให้เปลี่ยนเป็นแนวนอน
          - gap-8: ระยะห่างในทุกขนาด
          - sm:gap-36: เพิ่มระยะห่างเป็น 36 เมื่อหน้าจอขนาด 'sm' ขึ้นไป
        */}
        <div className="flex items-center justify-center gap-8 sm:gap-36 flex-col sm:flex-row">
          
          {/* ส่วนที่ 1: มหาวิทยาลัย */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.9 }}
            className="mb-8 sm:mb-0" // เพิ่มระยะห่างด้านล่างสำหรับหน้าจอเล็ก
          >
            <div className="flex flex-col items-center"> {/* จัดให้อยู่ตรงกลางในแนวตั้ง */}
              <img
                src={University}
                alt="Assumption University"
                className="w-[180px] sm:w-[200px] mb-2" // ปรับขนาดภาพเล็กน้อยสำหรับ responsive
              />
              <div className="font-semibold w-[280px] sm:w-[200px] text-base sm:text-lg text-center">
                Bachelor degree in Business English at Assumption University
              </div>
            </div>
          </motion.div>

          {/* ส่วนที่ 2: CodeCamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex flex-col items-center"> {/* จัดให้อยู่ตรงกลางในแนวตั้ง */}
              <img
                src={code}
                alt="Software Park CodeCamp"
                className="w-[180px] sm:w-[200px] mb-2" // ปรับขนาดภาพเล็กน้อยสำหรับ responsive
              />
              <div className="font-semibold w-[280px] sm:w-[200px] text-base sm:text-lg text-center">
                Certificate Software Park CodeCamp #18 2024 Full-Stack
                JavaScript Developer
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </>
  );
}