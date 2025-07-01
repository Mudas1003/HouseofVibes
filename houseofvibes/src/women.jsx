import React, { useState } from "react";
import heroImg from "./assets/hero1.jpg";

// Stack Images
import dress1 from "./assets/dress1.jpg";
import dress2 from "./assets/dress2.jpg";
import dress3 from "./assets/dress3.jpg";

import tops1 from "./assets/top1.jpg";
import tops2 from "./assets/top2.jpg";
import tops3 from "./assets/top3.jpg";

import skirts1 from "./assets/skirts1.jpg";
import skirts2 from "./assets/skirts2.jpg";
import skirts3 from "./assets/skirts3.jpg";

import shoesImg from "./assets/shoes1.jpg";
import glassesImg from "./assets/glasses1.jpg";
import accessoriesImg from "./assets/accessories1.jpg";

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

const WomensSection = () => {
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
            fontSize: "9rem",
            fontWeight: "bold",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            marginLeft: "-500px",
            marginTop: "450px",
          }}
        >
          WOMEN's
        </h1>
      </div>

      {/* Dresses */}
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
          <h2 style={{ fontSize: "8.5rem" }}>Dresses</h2>
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
            Stay elegant and stylish with our trending dress collection—perfect for
            any occasion.
          </p>
          <button className="cool-button">CheckOut</button>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <ImageStack
            images={[dress1, dress2, dress3]}
            width="450px"
            height="650px"
          />
        </div>
      </div>

      {/* Tops */}
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
          <h2 style={{ fontSize: "6.5rem", marginTop: "-60px" }}>Tops</h2>
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
            Discover breathable, bold, and stylish tops for every mood and occasion.
          </p>
          <button className="cool-button">CheckOut</button>
        </div>
        <div style={{ flex: 1, minWidth: "300px" }}>
          <ImageStack
            images={[tops1, tops2, tops3]}
            width="350px"
            height="500px"
          />
        </div>
      </div>

      {/* Skirts Section */}
      <div
        style={{
          display: "flex",
          padding: "4rem 2rem",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1350px",
        }}
      >
        {/* Skirts Grid */}
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
            {"BOTTOMS".split("").map((char, i) => (
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
                src={skirts1}
                alt="Skirts Main"
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
              {[skirts2, skirts3].map((img, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <img
                    src={img}
                    alt={`Skirts Small ${i}`}
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

        {/* Skirts Text Content */}
        <div style={{ flex: 1, width: "500px", paddingLeft: "-100px" }}>
          <h2 style={{ fontSize: "6.5rem", marginTop: "-60px" }}>Skirts</h2>
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
            Complete your look with our versatile collection of skirts, designed
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
          “Over the years I have learned that what is important in a dress is the woman who’s wearing it.”
          — Yves Saint Laurent
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

export default WomensSection;