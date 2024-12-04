import React, { useEffect, useState } from "react";
import University from "../assets/University.png";
import code from "../assets/code.png";
import { motion } from "framer-motion";

export default function Education() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

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
        <div className="text-center font-semibold text-3xl mb-4">
          Education{" "}
        </div>
        <div className="flex items-center justify-center gap-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <div>
              <img
                src={University}
                alt=""
                className="w-[200px] flex justify-center mx-auto"
              />
              <div className="font-semibold w-[200px] text-lg text-center">
                Bachelor degree in Business English at Assumption University
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <div>
              <img
                src={code}
                alt=""
                className="w-[200px] flex justify-center mx-auto"
              />
              <div className="font-semibold w-[200px] text-lg text-center">
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
