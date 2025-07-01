import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { addToBag } from './bagUtils'; // ✅ adjust the path if needed


import img1 from "./assets/look1.jpeg";
import img2 from "./assets/look2.jpeg";
import img3 from "./assets/look3.jpeg";
import img4 from "./assets/look4.jpeg";
import img5 from "./assets/look5.jpeg";
import img6 from "./assets/look6.jpeg";
import img7 from "./assets/look7.jpeg";

const products = [
  { img: img1, name: "Look 1" },
  { img: img2, name: "Look 2" },
  { img: img3, name: "Look 3" },
  { img: img4, name: "Look 4" },
  { img: img5, name: "Look 5" },
  { img: img6, name: "Look 6" },
  { img: img7, name: "Look 7" },
];

const OutfitCarousel = () => {
  return (
    <div className="carousel-section">
      <style>{`
        .carousel-section {
          width: 1360px;
          height: 900px;
          padding: 0;
          margin: 0;
          background-color: rgb(45, 59, 41);
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: Poppins;
          margin-left: -35px;
        }

        .carousel-title {
          font-size: 6.5rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 10px;
          margin-top: 30px;
        }

        .carousel-subtext {
          font-size: 1.5rem;
          color: #e2e2e2;
          margin-bottom: 20px;
          max-width: 700px;
          text-align: center;
        }

        .checkout-button {
          margin-top: 10px;
          margin-bottom: 30px;
          padding: 15px 30px;
          font-size: 0.8rem;
          font-weight: 400;
          min-width: 230px;
          height: 60px;
          border: none;
          background: linear-gradient(135deg, #000, #222);
          color: white;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          user-select: none;
        }

        .checkout-button .arrow {
          font-size: 1.5rem;
          transform: translateX(0);
          transition: transform 0.3s ease;
        }

        .checkout-button:hover .arrow {
          transform: translateX(8px);
        }

        .checkout-button:active {
          transform: scale(0.95);
        }

        .swiper {
          width: 90vw;
          padding-bottom: 60px;
        }

        .swiper-slide {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: transform 0.4s ease-in-out;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .shop-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #111;
          color: #fff;
          padding: 10px 20px;
          border-radius: 25px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }

        .swiper-slide:hover .shop-button {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .carousel-title {
            font-size: 2rem;
          }

          .carousel-subtext {
            font-size: 1rem;
            padding: 0 10px;
          }

          .swiper-slide {
            width: 200px !important;
            height: 300px !important;
          }
        }
      `}</style>

      <div className="carousel-title">Outfits of the Week</div>
      <div className="carousel-subtext">
        Discover the most loved styles of the week, picked just for you. Shop the look and stay in trend with our curated outfits.
      </div>

      {/* ✨ Checkout All Styles Button */}
      <button className="checkout-button">
        CheckOut All Styles <span className="arrow">➔</span>
      </button>

      {/* 🌀 Swiper Carousel */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "300px", height: "420px" }}>
            <img src={product.img} alt={product.name} />
            <button className="shop-button" onClick={() => addToBag({
                          name: "OOTW",
                          price: 1699,
                          discount: 30,
                          image: img1
                        })}>Shop</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OutfitCarousel;
