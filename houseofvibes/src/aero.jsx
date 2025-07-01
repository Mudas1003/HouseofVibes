import React from "react";
import { Link } from "react-router-dom";

import menImg from "./assets/men.jpeg";
import womenImg from "./assets/women.jpeg";
import shoesImg from "./assets/shoes.jpeg";
import accessoriesImg from "./assets/accessories.jpeg";
import bgImg from "./assets/bg2.png";

const Categories = () => {
  const categories = [
    { name: "Men", img: menImg, link: "/men" },
    { name: "Women", img: womenImg, link: "/women" },
    { name: "Shoes", img: shoesImg, link: "/shoes" },
    { name: "Accessories", img: accessoriesImg, link: "/accessories" },
  ];

  return (
    <div className="category-section">
      <style>{`
        .category-section {
          position: relative;
          background-image: url(${bgImg});
          background-size: cover;
          background-position: center;
          padding: 80px 20px;
          text-align: center;
          color: #fff;
          width: 1325px;
          height: 450px;
          margin-left: -40px;
          margin-top: -30px;
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(245, 212, 1, 0.5);
          z-index: -1;
        }

        .category-title {
          font-size: 65px;
          font-weight: 900;
          font-family: Poppins;
          margin-bottom: 60px;
          margin-top: -20px;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
          z-index: 1;
        }

        .category-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 60px;
          z-index: 1;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
        }

        .category-img {
          width: 220px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .category-img:hover {
          transform: scale(1.07);
        }

        .category-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-name {
          margin-top: 18px;
          font-size: 25px;
          font-family: Poppins;
          font-weight: 400;
          color: #fff;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 768px) {
          .category-img {
            width: 130px;
            height: 130px;
          }
          .category-name {
            font-size: 16px;
          }
          .category-title {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="category-overlay"></div>

      <h2 className="category-title">CATEGORIES</h2>

      <div className="category-container">
        {categories.map((cat, i) => (
          <Link to={cat.link} className="category-item" key={i}>
            <div className="category-img">
              <img src={cat.img} alt={cat.name} />
            </div>
            <div className="category-name">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
