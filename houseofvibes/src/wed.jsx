import React from 'react';
import leftImage from './assets/wed.jpeg';
import { Link } from 'react-router-dom';


const DarpanSection = () => {
  return (
    <>
      <style>{`
        .darpan-container {
          display: flex;
          width: 1350px;
          height: 650px;
          position: relative;
          overflow: hidden;
          font-family: 'Playfair Display', serif;
          left: -35px;
        }

        .darpan-image {
          flex: 1;
          position: relative;
        }

        .darpan-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .darpan-text {
          flex: 1;
          background-color:rgb(129, 20, 20);
          color: white;
          padding: 6rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
          text-align: center;
          align-items: center;
        }

        .small-title {
          font-size: 1.3rem;
          letter-spacing: 1px;
          margin-bottom: -20px;
          margin-top: -20px;
        }

        .medium-title {
          font-size: 2.5rem;
          margin-bottom: 0.2rem;
        }

        .presenting-text {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .main-heading {
          font-size: 8rem;
          font-family: "Playfair Display", serif;
          font-weight: 400;
          line-height: 1.1;
          margin-top: -10px;
          margin-bottom: 0.5rem;
          position: relative;
          background: linear-gradient(135deg, #ffffff,rgb(231, 229, 229), #999999, #e0e0e0);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: breathe 4s ease-in-out infinite, shine 3s infinite linear;
        }

        .main-heading::after {
          content: "Darpan";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          transform: scaleY(-1);
          opacity: 0.15;
          background: inherit;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: "Playfair Display", serif;
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .sub-heading {
          font-size: 1.6rem;
          margin-bottom: 50px;
          margin-top: 110px;
          letter-spacing: 1px;
        }

        .explore-btn {
          background-color: transparent;
          color: white;
          border: 3px solid hsl(330, 58.90%, 48.60%);
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: background 0.4s ease, color 0.4s ease, border 0.4s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explore-btn:hover {
          background-color: rgb(126, 9, 54);
          color: white;
          border: 3px solid hsl(330, 88.00%, 45.70%);
        }

        .arrow {
          font-size: 1.2rem;
        }

        .darpan-oval {
          position: absolute;
          left: 54%;
          top: 48%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 3;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        }

        .darpan-oval img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="darpan-container">
        <div className="darpan-image">
          <img src={leftImage} alt="Collection" />
        </div>

        <div className="darpan-text">
          <p className="small-title">House Of Vibes</p>
          <h2 className="medium-title">House of Riwayat</h2>
          <p className="presenting-text">presents</p>
          <h1 className="main-heading">Darpan</h1>
          <p className="sub-heading">~The Wedding Collection</p>
          <Link to="/darpan"><button className="explore-btn">
            Explore <span className="arrow">→</span>
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default DarpanSection;
