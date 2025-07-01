import React, { useState } from "react";
import hoodieMain from "./assets/main1.jpg";
import hoodieThumb1 from "./assets/thumb1.jpg";
import hoodieThumb2 from "./assets/thumb2.jpg";
import hoodieThumb3 from "./assets/thumb3.jpg";
import teeMain from "./assets/main2.jpg";
import teeThumb1 from "./assets/thumb4.jpg";
import teeThumb2 from "./assets/thumb5.jpg";
import teeThumb3 from "./assets/thumb6.jpg";
import topMain from "./assets/main3.jpg";
import topThumb1 from "./assets/thumb7.jpg";
import topThumb2 from "./assets/thumb8.jpg";
import topThumb3 from "./assets/thumb9.jpg";
import logo from "./assets/logo.png"; // ✅ Logo image
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
                {["XS", "S", "M", "L", "XL"].map((size) => (
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
              name: "Men's Top/Hoodie",
              price: 1999,
              discount: 20,
              image: teeMain
            })}>ADD TO CART</button>
            <button style={styles.buyNow} onClick={() => addToBag({
              name: "Men's Top/Hoodie",
              price: 1999,
              discount: 20,
              image: teeMain
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

const ProductPage = () => {
  const products = [
    {
      type: "hoodie",
      mainImage: hoodieMain,
      thumbnails: [hoodieThumb1, hoodieThumb2, hoodieThumb3],
      title: "PREMIUM QUALITY KNITTED HOODIE BY HOUSE OF VIBES",
      price: "$189.95",
      description: "The rich black hue and tailored cut make this jacket from the autumn–summer collection a perfect piece for passionate travelers or romantic stargazers alike. A unique, breathable touch with a structured design and wide lapels ensures timeless sophistication.",
      details: [
        { label: "Quality", value: "Premium" },
        { label: "Warranty", value: "1 Year" },
        { label: "Washing", value: "Dry Clean Only" },
        { label: "Fabric Type", value: "100% Cotton with Leather Trim" }
      ]
    },
    {
      type: "tee",
      mainImage: teeMain,
      thumbnails: [teeThumb1, teeThumb2, teeThumb3],
      title: "PREMIUM COTTON T-SHIRT BY HOUSE OF VIBES",
      price: "$89.95",
      description: "This premium cotton t-shirt offers exceptional comfort with a modern fit. The lightweight fabric and breathable design make it perfect for everyday wear, while the subtle branding adds a touch of sophistication.",
      details: [
        { label: "Quality", value: "Premium Cotton" },
        { label: "Warranty", value: "6 Months" },
        { label: "Washing", value: "Machine Wash Cold" },
        { label: "Fabric Type", value: "100% Organic Cotton" }
      ]
    },
    {
      type: "top",
      mainImage: topMain,
      thumbnails: [topThumb1, topThumb2, topThumb3],
      title: "PREMIUM WOMEN'S SILK TOPS BY HOUSE OF VIBES",
      price: "$99.95",
      description: "This elegant silk blouse combines luxury and versatility. Its flowing silhouette and soft, breathable fabric make it ideal for both professional and casual settings, with delicate detailing for a refined look.",
      details: [
        { label: "Quality", value: "Premium Silk" },
        { label: "Warranty", value: "6 Months" },
        { label: "Washing", value: "Dry Clean Only" },
        { label: "Fabric Type", value: "100% Pure Silk" }
      ]
    }
  ];

  return (
    <div style={styles.page}>
      <div style={styles.logoContainer}>
        <Link to="/"><img src={logo} alt="Logo" style={styles.logo} /></Link>
      </div>
      <h1 style={{
        fontSize: "60px",
        fontWeight: "bold",
        margin: "0 0 40px 30px",
        textAlign: "left",
        color: "#fff",
        marginLeft: "30px",
        fontFamily: "Monataga"
      }}>
        Tops & Tees by House of Vibes
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
    marginBottom: "-40px"
  },
  logoContainer: {
    display: "flex",
    marginBottom: "-30px",
    marginLeft: "20px",
    marginTop: "-50px"
  },
  logo: {
    width: "200px",
    height: "auto",
    objectFit: "contain",

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

export default ProductPage;
