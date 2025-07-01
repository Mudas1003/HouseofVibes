import React, { useState } from "react";
import heroImg from "./assets/hero.jpg";

// Stack Images
import hoodie1 from "./assets/hoodie.jpg";
import hoodie2 from "./assets/hoodie2.jpg";
import hoodie3 from "./assets/hoodie3.jpg";

import tees1 from "./assets/tees.jpg";
import tees2 from "./assets/tees2.jpg";
import tees3 from "./assets/tees3.jpg";

import bottoms1 from "./assets/bottoms.jpg";
import bottoms2 from "./assets/bottom2.jpg";
import bottoms3 from "./assets/bottom3.jpg";

import shoesImg from "./assets/shoes.jpg";
import glassesImg from "./assets/glasses.jpg";
import accessoriesImg from "./assets/accessories.jpg";

// Reusable Stack component
const ImageStack = ({ images, width, height }) => {
  const [stack, setStack] = useState(images);

  const bringLastToFront = () => {
    const newStack = [...stack];
    const last = newStack.pop();
    newStack.unshift(last);
    setStack(newStack);
  };

  return (
    <div
      className="stack-container"
      onClick={bringLastToFront}
      style={{ width: width, height: height }}
    >
      {stack.map((img, i) => (
        <img
          key={i}
          src={img}
          className="stack-image"
          style={{
            zIndex: stack.length - i,
            transform: `translate(${i * 4}px, ${i * 4}px) rotate(${i * 1.5}deg)`,
          }}
          alt={`stack-${i}`}
        />
      ))}
    </div>
  );
};

const MensSection = () => {
  return (
    <div
      style={{
        fontFamily: "Monataga",
        color: "#fff",
        backgroundColor: "#111",
        width: "1350px",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        marginLeft: "-65px",
        marginTop: "-50px",
        marginBottom: "-40px"
      }}
    >
      {/* Hero */}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "1000px",
          width: "1350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-30px",
        }}
      >
        <h1
          style={{
            fontSize: "16rem",
            fontWeight: "bold",
            color: "black",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            marginLeft: "-400px",
            marginTop: "-400px",
          }}
        >
          MEN's
        </h1>
      </div>

      {/* Hoodies */}
      <div
        style={{
          display: "flex",
          padding: "4rem 2rem",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1350px",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "8.5rem" }}>Hoodies</h2>
          <p style={{ color: "#ccc", marginTop: "-140px", fontSize: "3.5rem" }}>
            Trending
          </p>
          <p
            style={{
              marginTop: "1rem",
              maxWidth: "600px",
              fontSize: "2rem",
              marginLeft: "10px",
            }}
          >
            Stay cozy and stylish with our trending hoodie collection—perfect for
            any season.
          </p>
          <button className="cool-button">CheckOut</button>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <ImageStack
            images={[hoodie1, hoodie2, hoodie3]}
            width="450px"
            height="650px"
          />
        </div>
      </div>

      {/* Tees */}
      <div
        style={{
          display: "flex",
          padding: "4rem 2rem",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
          width: "1350px",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "6.5rem", marginTop: "-60px" }}>Tees</h2>
          <p style={{ color: "#ccc", marginTop: "-110px", fontSize: "1.5rem" }}>
            Fashionable
          </p>
          <p
            style={{
              marginTop: "1rem",
              maxWidth: "700px",
              fontSize: "2rem",
            }}
          >
            Discover breathable, bold, and stylish tees for every mood and move.
          </p>
          <button className="cool-button">CheckOut</button>
        </div>
        <div style={{ flex: 1, minWidth: "300px" }}>
          <ImageStack
            images={[tees1, tees2, tees3]}
            width="350px"
            height="500px"
          />
        </div>
      </div>

      {/* Bottoms Section */}
      <div
        style={{
          display: "flex",
          padding: "4rem 2rem",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1350px",
        }}
      >
        {/* Bottoms Grid */}
        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            minWidth: "200px",
          }}
        >
          <div className="vertical-text">
            {"PANTS".split("").map((char, i) => (
              <div key={i}>{char}</div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={bottoms1}
                alt="Bottoms Main"
                style={{
                  width: "400px",
                  height: "600px",
                  borderRadius: "1rem",
                  objectFit: "cover",
                }}
              />
              <div className="hover-overlay">
                <button className="hover-checkout">CheckOut</button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[bottoms2, bottoms3].map((img, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <img
                    src={img}
                    alt={`Bottoms Small ${i}`}
                    style={{
                      width: "180px",
                      height: "280px",
                      borderRadius: "1rem",
                      objectFit: "cover",
                    }}
                  />
                  <div className="hover-overlay">
                    <button className="hover-checkout">CheckOut</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottoms Text Content */}
        <div style={{ flex: 1, width: "500px", paddingLeft: "-100px" }}>
          <h2 style={{ fontSize: "6.5rem", marginTop: "-60px" }}>Bottoms</h2>
          <p style={{ color: "#ccc", marginTop: "-110px", fontSize: "1.5rem" }}>
            Versatile
          </p>
          <p
            style={{
              marginTop: "1rem",
              width: "500px",
              fontSize: "1.8rem",
            }}
          >
            Complete your look with our versatile collection of bottoms, designed
            for comfort and style.
          </p>
          <button className="cool-button">CheckOut</button>
        </div>
      </div>

      {/* Accessories Section */}
      <div
        style={{
          padding: "2rem",
          width: "1350px",
          marginTop: "-50px",
        }}
      >
        <h2
          style={{
            fontSize: "6.5rem",
            marginBottom: "1rem",
            paddingLeft: "2rem",
          }}
        >
          
        </h2>
        <p
          style={{
            color: "#ccc",
            fontSize: "2.5rem",
            marginTop: "-30px",
            paddingLeft: "2rem",
          }}
        >
          Essentials
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "7rem",
            padding: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[shoesImg, glassesImg, accessoriesImg].map((img, i) => (
            <div key={i} className="circle-image-container">
              <img src={img} className="circle-image" alt={`accessory-${i}`} />
              <div className="hover-overlay">
                <button className="hover-checkout">CheckOut</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "white",
            marginTop: "-20px",
          }}
        >
          "Fashion is not something that exists in dresses only. Fashion is in
          the sky, in the street, fashion has to do with ideas, the way we live,
          what is happening." — Coco Chanel
        </h2>
      </div>

      {/* Styles */}
      <style>{`
        * { box-sizing: border-box; }

        .cool-button {
          background: transparent;
          border: 2px solid;
          padding: 0.8rem 2rem;
          color: #ff6a00;
          font-weight: bold;
          border-radius: 2rem;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 200px;
          height: 50px;
          font-size: 20px;
        }

        .cool-button:hover {
          background: linear-gradient(135deg, #ff6a00, #ee0979);
          border: 2px solid #fff;
          color: white;
        }

        .circle-image-container {
          position: relative;
          width: 200px;
          height: 200px;
          flex-shrink: 0;
        }

        .circle-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          transition: filter 0.3s ease;
        }

        .circle-image-container:hover .circle-image {
          filter: brightness(0.7);
        }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .circle-image-container:hover .hover-overlay,
        .hover-overlay:hover {
          opacity: 1;
          pointer-events: auto;
        }

        .hover-checkout {
          background: rgba(0,0,0,0.6);
          color: #fff;
          border: 1px solid ;
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          cursor: pointer;
          font-size: 1.1rem;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .hover-checkout:hover {
          background: #fff;
          color: #000;
        }

        .stack-container {
          position: relative;
          margin: 0 auto;
          cursor: pointer;
        }

        .stack-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .vertical-text {
          margin-right: 10px;
          text-align: center;
          font-size: 3.9rem;
          font-weight: bold;
          letter-spacing: 0.1rem;
          line-height: 1.2;
          animation: floatIn 2s ease forwards;
          opacity: 0;
        }

        @keyframes floatIn {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MensSection;