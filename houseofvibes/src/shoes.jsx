import React, { useState } from "react";
import menFootwearMain from "./assets/main6.jpg";
import menFootwearThumb1 from "./assets/thumb16.jpg";
import menFootwearThumb2 from "./assets/thumb17.jpg";
import menFootwearThumb3 from "./assets/thumb18.jpg";
import womenFootwearMain from "./assets/main7.jpg";
import womenFootwearThumb1 from "./assets/thumb19.jpg";
import womenFootwearThumb2 from "./assets/thumb20.jpg";
import womenFootwearThumb3 from "./assets/thumb21.jpg";
import hovLogo from "./assets/logo.png"; // ✅ Add this line
import Navbar from "./navbar";
import { addToBag } from './bagUtils';
import { Link } from "react-router-dom";


const ProductSection = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleThumbClick = (imgSrc) => {
    setMainImage(imgSrc);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div style={styles.productSection}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={mainImage} alt="product" style={styles.mainImage} />
          <div style={styles.thumbnails}>
            {[product.mainImage, ...product.thumbnails].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`thumb${i}`} 
                style={{
                  ...styles.thumb,
                  border: mainImage === src ? "2px solid #ff6a00" : "1px solid #444"
                }}
                onClick={() => handleThumbClick(src)}
              />
            ))}
          </div>
        </div>

        <div style={styles.right}>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.price}>{product.price}</p>

          <div style={styles.selectRow}>
            <label>Q-TY</label>
            <select style={styles.select}>
              {[1, 2, 3, 4].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div style={styles.sizeSection}>
            <label style={styles.sizeLabel}>SIZE</label>
            <div style={styles.sizeContainer}>
              <div style={styles.sizeButtons}>
                {["6" ,"7", "8", "9", "10", "11"].map((size) => (
                  <button
                    key={size}
                    style={{
                      ...styles.sizeButton,
                      border: selectedSize === size ? "2px solid #ff6a00" : "1px solid #555",
                      color: selectedSize === size ? "#ff6a00" : "white"
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.buttons}>
            <button style={styles.addToCart} onClick={() => addToBag({
              name: "Shoes",
              price: 2999,
              discount: 30,
              image: menFootwearThumb1
            })}>ADD TO CART</button>
            <button style={styles.buyNow} onClick={() => addToBag({
              name: "Shoes",
              price: 2999,
              discount: 30,
              image: menFootwearThumb1
            })}>BUY IT NOW</button>
          </div>

          <div style={styles.description}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div style={styles.detailsTable}>
            <table style={styles.table}>
              <tbody>
                {product.details.map((detail, i) => (
                  <tr key={i} style={styles.tableRow}>
                    <td style={styles.tableLabel}>{detail.label}</td>
                    <td style={styles.tableValue}>{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const FootwearPage = () => {
  const products = [
    {
      type: "men-footwear",
      mainImage: menFootwearMain,
      thumbnails: [menFootwearThumb1, menFootwearThumb2, menFootwearThumb3],
      title: "PREMIUM MEN'S SHOES BY HOUSE OF VIBES",
      price: "$179.95",
      description: "These premium leather sneakers combine style and durability. Crafted with high-quality leather and a cushioned sole, they offer all-day comfort for both casual and semi-formal occasions, with sleek detailing for a modern edge.",
      details: [
        { label: "Quality", value: "Premium Leather" },
        { label: "Warranty", value: "1 Year" },
        { label: "Care", value: "Leather Cleaner" },
        { label: "Material", value: "100% Genuine Leather" }
      ]
    },
    {
      type: "women-footwear",
      mainImage: womenFootwearMain,
      thumbnails: [womenFootwearThumb1, womenFootwearThumb2, womenFootwearThumb3],
      title: "PREMIUM WOMEN'S SUEDE HEELS BY HOUSE OF VIBES",
      price: "$199.95",
      description: "These elegant suede boots offer a perfect blend of sophistication and comfort. The soft suede exterior and supportive insole make them ideal for stylish outings or everyday wear, with a timeless design that elevates any outfit.",
      details: [
        { label: "Quality", value: "Premium Suede" },
        { label: "Warranty", value: "6 Months" },
        { label: "Care", value: "Suede Protector Spray" },
        { label: "Material", value: "100% Suede with Rubber Sole" }
      ]
    }
  ];

  return (
    <div style={styles.page}>
      {/* ✅ Logo added here */}
      <Link to="/"><img src={hovLogo} alt="House of Vibes Logo" style={styles.logo} /></Link>

      <h1 style={{
        fontSize: "60px",
        fontWeight: "bold",
        margin: "0 0 40px 30px",
        textAlign: "left",
        color: "#fff",
        marginLeft: "30px",
        fontFamily: "Monataga"
      }}>
        Footwear by House of Vibes
      </h1>

      {products.map((product, index) => (
        <ProductSection key={index} product={product} />
      ))}
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#141211",
    color: "white",
    fontFamily: "Monataga",
    padding: "40px",
    width: "1280px",
    marginLeft: "-40px",
    marginTop: "-40px",
    marginBottom: "-40px",
    position: "relative"
  },
  logo: {
    width: "200px",
    height: "auto",
    objectFit: "contain",
    marginBottom: "-40px",
    marginLeft: "-1050px",
    marginTop: "-50px"
  },
  productSection: {
    marginBottom: "80px",
  },
  container: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "8px",
  },
  thumbnails: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  thumb: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  price: {
    fontSize: "25px",
    color: "#ffa500",
    marginBottom: "20px",
  },
  selectRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    gap: "10px",
  },
  select: {
    padding: "10px",
    backgroundColor: "#1e1e1e",
    border: "1px solid #444",
    color: "#fff",
    borderRadius: "4px",
  },
  sizeSection: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginBottom: "25px",
  },
  sizeLabel: {
    minWidth: "50px",
    color: "#fff",
    marginLeft: "-8px"
  },
  sizeContainer: {
    flex: 1,
    marginLeft: "-30px"
  },
  sizeButtons: {
    display: "flex",
    gap: "10px",
  },
  sizeButton: {
    width: "40px",
    height: "40px",
    border: "1px solid",
    borderRadius: "4px",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold"
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
    justifyContent: "center",
  },
  addToCart: {
    padding: "12px 25px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "all 0.2s ease",
  },
  buyNow: {
    padding: "12px 25px",
    backgroundColor: "#ff6a00",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "all 0.2s ease",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#ccc",
    marginBottom: "30px",
  },
  detailsTable: {
    width: "100%",
    borderTop: "4px solid #444",
    paddingTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "0 auto",
  },
  tableRow: {
    borderBottom: "2px solid #444",
  },
  tableLabel: {
    fontWeight: "200px",
    padding: "12px 0",
    color: "#ffa500",
    width: "40%",
  },
  tableValue: {
    padding: "12px 0",
    color: "#fff",
  },
};

export default FootwearPage;
