import React, { useEffect, useRef, useState } from 'react';
import leftImgTop from './assets/sea1.jpeg';
import rightImgTop from './assets/sea2.jpeg';
import { Link } from 'react-router-dom';


const SeasonsCollection = () => {
  const archRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (archRef.current) observer.observe(archRef.current);
    return () => archRef.current && observer.unobserve(archRef.current);
  }, []);

  return (
    <>
      <style>{`
        .season-container {
          width: 1350px;
          height: 100vh;
          background-color: #052B33;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Playfair Display', serif;
          margin-left: -35px;
          gap: 3rem;
          position: relative;
          overflow: hidden;
        }

        .image-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .image-block {
          width: 200px;
          height: 360px;
          border: 2px solid #ccc;
          border-radius: 100px;
          position: relative;
          overflow: hidden;
          background-color: #0A3B46;
          box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.2), 0 0 30px 6px rgba(255, 255, 255, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .image-block:hover {
          transform: scale(1.07);
          box-shadow: 0 0 15px 4px #ffffffaa, 0 0 40px 8px #ffffff55;
        }

        .image-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-caption {
          color: #EAD8D8;
          font-family: 'Montaga';
          font-size: 1.1rem;
          width: 270px;
          margin-top: 0.5rem;
          text-align: center;
          letter-spacing: 1px;
        }

        .season-arch {
          background: linear-gradient(145deg, #0c4854, #08333d);
          width: 500px;
          height: 550px;
          border-radius: 0 0 250px 250px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: inset 0 -10px 20px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.5);
          border: 1px solid #1b4c59;
          padding: 1rem;
          margin-top: -50px;
        }

        .season-the, .season-main, .season-sub {
          transform: translateY(-60px);
          opacity: 0;
          transition: all 0.6s ease;
        }

        .season-the.visible {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.1s;
        }

        .season-main.visible {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.3s;
        }

        .season-sub.visible {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.5s;
        }

        .season-the {
          font-size: 1.4rem;
          color: #F3F3F3;
          margin-bottom: -10px;
          letter-spacing: 2px;
          font-family: Montaga;
        }

        .season-main {
          font-size: 6rem;
          color: #E3CFCF;
          margin: 10px 0;
          font-family: "Playfair Display", serif;
        }

        .season-sub {
          font-size: 2rem;
          color: #EAD8D8;
          margin-top: -5px;
          letter-spacing: 1px;
          font-family: Montaga;
          margin-left: 120px;
        }

        .divider {
          width: 60px;
          height: 2px;
          background-color: #D9AAB7;
          margin: 20px 0;
        }

        .checkout-button {
          min-width: 10rem;
          margin-top: 1.5rem;
          padding: 0.2rem 2.3rem ;
          font-size: 1.1rem;
          border: 3px solid #D9AAB7;
          background-color: transparent;
          color:rgb(255, 255, 255);
          cursor: pointer;
          font-family: Montaga;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .checkout-button:hover {
          background-color: #D9AAB7;
          color:rgb(255, 255, 255);
        }
      `}</style>

      <div className="season-container" ref={archRef}>
        {/* Left Side */}
        <div className="image-column">
          <div className="image-block">
            <img src={leftImgTop} alt="Left" />
          </div>
          <p className="image-caption">
            Step into the rhythm of nature with our exclusive Season's Collection.
          </p>
        </div>

        {/* Center Arch */}
        <div className="season-arch">
          <p className={`season-the ${visible ? 'visible' : ''}`}>The</p>
          <h1 className={`season-main ${visible ? 'visible' : ''}`}>Season's</h1>
          <p className={`season-sub ${visible ? 'visible' : ''}`}>Collection</p>
          <div className="divider"></div>
          <Link to="/collection"><button className="checkout-button">CheckOut</button></Link>
        </div>

        {/* Right Side */}
        <div className="image-column">
          <div className="image-block">
            <img src={rightImgTop} alt="Right" />
          </div>
          <p className="image-caption">
            This collection bridges comfort with elegance, modern trends with classic charm.
          </p>
        </div>
      </div>
    </>
  );
};

export default SeasonsCollection;
