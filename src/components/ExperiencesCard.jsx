import React from 'react';
// ลบการนำเข้า Swiper เนื่องจากไม่สามารถ Resolve ได้ในสภาพแวดล้อมนี้
// import { Swiper, SwiperSlide } from 'swiper/react'; 

const experiences = [
  {
    title: "ERP Odoo System Programmer",
    duration: "1 Year",
    details: "Developed and customized Odoo ERP system modules, enhancing business processes and operational efficiency.",
    color: "#FF9800", // Vibrant Orange
    textColor: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #ffa600 0%, #fc6aa3 80%)' // Orange Gradient
  },
   {
    title: "Hospital Customer Service",
    duration: "1 Year",
    details: "Provided empathetic and efficient support to patients and visitors, ensuring high satisfaction in a fast-paced environment.",
    color: "#FFEB3B", // Bright Yellow
    textColor: '#FFFFFF', // Dark text for contrast on bright yellow
    gradient: 'linear-gradient(135deg, #77BEF0 0%, #00FF9C 80%)' // Solid Yellow
  },
  {
    title: "Full-Stack Developer",
    duration: "6 Months",
    details: "Built responsive web applications from the ground up, working across front-end (React) and back-end (Node.js/Express).",
    color: "#E91E63", // Vibrant Pink
    textColor: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #E91E63 0%, #799EFF 80%)' // Pink Gradient
  },
  {
    title: "Hospital Customer Service",
    duration: "1 Year",
    details: "Provided empathetic and efficient support to patients and visitors, ensuring high satisfaction in a fast-paced environment.",
    color: "#FFEB3B", // Bright Yellow
    textColor: '#FFFFFF', // Dark text for contrast on bright yellow
    gradient: 'linear-gradient(135deg, #c4fc03 0%, #fce72a 80%)' // Solid Yellow
  },
 
];

// Inline Styles for a uniform, colorful, and attractive look
const styles = {
  // สไตล์สำหรับ container หลัก ที่ทำหน้าที่เป็น Grid/Flexbox
  experiencesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '100%', // จำกัดความกว้างสูงสุดเพื่อให้การ์ดดูสวยงาม
    margin: '0 auto',
    padding: '20px 0',
  },
  experienceCard: {
    // กำหนดความกว้างพื้นฐานของการ์ดเพื่อให้ Responsive
    flex: '1 1 300px', // Grow: 1, Shrink: 1, Basis: 300px
    maxWidth: '400px', // จำกัดความกว้างสูงสุดต่อการ์ด
    
    border: 'none',
    borderRadius: '50px',
    padding: '30px',
    minHeight: '320px', // เพิ่มความสูงให้มากขึ้นและเท่ากันทุกการ์ด
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)', // เพิ่มเงาให้ดูโดดเด่น
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center', 
    // เพิ่มเอฟเฟกต์ hover ผ่านการฟัง event ใน React (สำหรับ production ควรใช้ CSS Class)
    ':hover': {
        transform: 'translateY(-20px) scale(1.05)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    }
  },
  cardTitle: {
    margin: '0 0 15px 0',
    fontSize: '2em',
    fontWeight: '800',
    textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
  },
  cardDuration: {
    margin: '0 0 15px 0',
    fontSize: '1.2em',
    fontStyle: 'normal',
    fontWeight: '600',
    opacity: '0.95',
  },
  cardDetails: {
    margin: 0,
    fontSize: '1em',
    lineHeight: '1.6',
    opacity: '0.9',
  },
  header: {
    textAlign: 'center', 
    marginBottom: '40px', 
    color: '#795353', 
    fontSize: '2.8em', // ขนาดใหญ่ขึ้น
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};

// Component สำหรับการ์ดประสบการณ์
const ExperienceCard = ({ experience }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // ใช้ JavaScript เพื่อจำลอง :hover สำหรับ inline styles
  const cardStyle = {
    ...styles.experienceCard,
    background: experience.gradient, 
    color: experience.textColor,
    ...(isHovered && styles.experienceCard[':hover'])
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="experience-static-card" // Class ไว้เผื่อใช้ CSS ภายนอก
    >
      <h3 style={styles.cardTitle}>
        {experience.title}
      </h3>
      <p style={styles.cardDuration}>
        <span role="img" aria-label="duration-icon"> 🕰 </span> {experience.duration}
      </p>
      <p style={styles.cardDetails}>
        {experience.details}
      </p>
    </div>
  );
};


export default function ExperiencesCard() {
  return (
    <div className="experiences-section-wrapper" style={{ padding: '50px 0px'}}>
      <h2 style={styles.header}>
        My Professional Experiences
      </h2>
      <div style={styles.experiencesGrid}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
