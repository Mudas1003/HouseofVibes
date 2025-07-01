import React, { useEffect, useState } from "react";
import careerImage from "./assets/career.png";

const CareerSection = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showFirstBtn, setShowFirstBtn] = useState(false);
  const [showSecondBtn, setShowSecondBtn] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowTitle(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 900);
    const timer3 = setTimeout(() => setShowFirstBtn(true), 1500);
    const timer4 = setTimeout(() => setShowSecondBtn(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="career-container">
      <style>{`
        .career-container {
          display: flex;
          width: 1350px;
          height: 600px;
          font-family: 'Montaga', sans-serif;
          margin-left: -35px;
        }

        .career-left {
          flex: 0.8;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .career-img {
          width: 550px;
          height: 550px;
          object-fit: contain;
          margin-bottom: -50px;
          margin-left: -170px;
        }

        .career-right {
          flex: 1;
          background-color: #111;
          color: #fff;
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .career-title,
        .career-text,
        .career-buttons button {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-in-out;
        }

        .career-title.visible,
        .career-text.visible,
        .career-buttons button.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .career-title {
          font-size: 5.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: left;
        }

        .career-text {
          font-size: 1.6rem;
          max-width: 650px;
          margin-bottom: 40px;
          color: #ccc;
          align-self: flex-end;
        }

        .career-buttons {
          display: flex;
          gap: 20px;
          justify-content: flex-start;
        }

        .career-buttons button {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 12px 25px;
          font-size: 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease, transform 0.3s ease;
        }

        .career-buttons button:hover {
          background: #fff;
          color: #111;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .career-container {
            flex-direction: column;
            height: auto;
          }

          .career-left, .career-right {
            width: 100%;
            height: auto;
            padding: 40px 20px;
          }

          .career-left {
            order: 1;
            height: 300px;
          }

          .career-right {
            order: 2;
            align-items: flex-start !important;
            text-align: right !important;
          }

          .career-title, .career-text {
            text-align: right;
            width: 100%;
          }

          .career-buttons {
            justify-content: flex-start !important;
          }
        }
      `}</style>

      <div className="career-left">
        <img src={careerImage} alt="Career Opportunities" className="career-img" />
      </div>

      <div className="career-right">
        <div className={`career-title ${showTitle ? "visible" : ""}`}>
          Careers
        </div>
        <div className={`career-text ${showText ? "visible" : ""}`}>
          Join our dynamic team and shape your future with us. Discover endless opportunities and become part of something impactful.
        </div>
        <div className="career-buttons">
          <button className={showFirstBtn ? "visible" : ""}>Explore</button>
          <button className={showSecondBtn ? "visible" : ""}>All Career Options</button>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
