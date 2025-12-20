import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Axios", "HTML5, CSS3, JavaScript (ES6+)"],
    color: "from-[#FF9A9E] to-[#FAD0C4]", // Soft Pink Gradient
    textColor: "text-rose-900"
  },
  {
    title: "Backend",
    items: ["Node.js", "RESTful API Development", "Postman"],
    color: "from-[#A1C4FD] to-[#C2E9FB]", // Soft Blue Gradient
    textColor: "text-blue-900"
  },
  {
    title: "Databases",
    items: ["MS SQL Server", "MySQL"],
    color: "from-[#84FAB0] to-[#8FD3F4]", // Soft Mint Gradient
    textColor: "text-teal-900"
  },
  {
    title: "DevOps & Deployment",
    items: ["Docker", "Nginx", "Render"],
    color: "from-[#CFD9DF] to-[#E2E2E2]", // Modern Grey Gradient
    textColor: "text-gray-800"
  },
  {
    title: "Automation",
    items: ["n8n (Workflow Automation)"],
    color: "from-[#FFECD2] to-[#FCB69F]", // Soft Peach
    textColor: "text-orange-900"
  }
];

export default function TextSkill() {
  return (
    <div className="w-full min-h-[600px] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {/* Title ปรับให้ดู Minimal ขึ้น */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-widest text-[#603F26] uppercase">
            Technical <span className="font-bold">Skills</span>
          </h1>
          <div className="h-1 w-20 bg-[#D1BB9E] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Swiper ปรับใช้ EffectFade เพื่อความสมูท */}
        <Swiper
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="h-[320px] rounded-[2rem]"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center p-2">
                <div
                  className={`
                    w-full h-full rounded-[2rem] p-8 md:p-12
                    bg-gradient-to-br ${skill.color}
                    shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                    border border-white/40 backdrop-blur-sm
                    flex flex-col justify-center items-center
                    transition-all duration-500
                  `}
                >
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 tracking-tight ${skill.textColor}`}>
                    {skill.title}
                  </h2>

                  <div className="flex flex-wrap justify-center gap-3">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className={`
                          px-4 py-2 rounded-full bg-white/30 border border-white/20
                          text-sm md:text-base font-medium ${skill.textColor}
                          backdrop-blur-md shadow-sm
                        `}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Styles สำหรับ Pagination จุดไข่ปลาให้ดูแพงขึ้น */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #D1BB9E !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          width: 20px !important;
          border-radius: 10px !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}