import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImg from "./assets/logo.png";
import overlayImg from "./assets/main.jpg";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import "./fonts/le-murmure.ttf";
import Navbar from "./navbar";

// ✅ Use imported images
const cardImages = [img1, img2, img3, img4, img5];

const cardVariants = {
  hidden: (i) => ({
    x: "100vw",
    opacity: 0,
    rotate: 0,
  }),
  arc: (i) => {
    const angle = Math.PI + (i / (cardImages.length - 1)) * Math.PI;
    const spacing = 1.2;
    return {
      x: `calc(50vw + ${Math.cos(angle) * 300 * spacing}px)`,
      y: `calc(35vh - ${Math.sin(angle) * 250 * spacing}px)`,
      rotate: 0,
      opacity: 1,
      zIndex: 20,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 1.2,
        type: "spring",
        stiffness: 80,
      },
    };
  },
  stacked: (i) => ({
    x: 50 + i * 2,
    y: window.innerHeight - 200 - i * 2,
    scale: 1,
    rotate: 0,
    zIndex: i,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
  row: (i) => ({
    x: 100 + i * 180,
    y: "50vh",
    rotate: 0,
    zIndex: 10,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

const Home = () => {
  const [cardStage, setCardStage] = useState("hidden");
  const [textVisible, setTextVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (textVisible) {
      setCardStage("arc");

      const toStacked = setTimeout(() => {
        setCardStage("stacked");
      }, 8000);

      return () => clearTimeout(toStacked);
    }
  }, [textVisible]);

  const handleCardClick = () => {
    setClickCount(prev => prev + 1);

    if (clickCount === 1) {
      setCardStage(prev => (prev === "row" ? "stacked" : "row"));
      setClickCount(0);
    } else {
      const timer = setTimeout(() => setClickCount(0), 300);
      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div
          style={{
            ...styles.bgImage,
            backgroundImage: `url(${overlayImg})`,
          }}
        />

        <div style={styles.contentContainer}>
          <motion.img
            src={logoImg}
            alt="Company Logo"
            initial={{ y: "-100vh", opacity: 0, scale: 1, x: "-50%" }}
            animate={{
              y: "0%",
              opacity: [1, 1, 1, 0],
              scale: [1, 1.4, 2.5, 1],
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.2, 0.6, 1],
              ease: "easeInOut",
            }}
            style={styles.logo}
          />

          <motion.div
            style={styles.textContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.2 }}
            onAnimationComplete={() => setTextVisible(true)}
          >
            <motion.span
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.4 }}
              style={styles.word}
            >
              <span style={{ color: "#FF7F50" }}>Ho</span>use
            </motion.span>

            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.2 }}
              style={{ ...styles.word, margin: "10px 15px" }}
            >
              of
            </motion.span>

            <motion.span
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.9, duration: 0.4 }}
              style={styles.word}
            >
              Vib<span style={{ color: "#FF7F50" }}>es</span>
            </motion.span>
          </motion.div>

          {textVisible && (
            <div
              style={styles.cardContainer}
              onClick={handleCardClick}
              onDoubleClick={() => setCardStage("row")}
            >
              {cardImages.map((img, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={cardStage}
                  variants={cardVariants}
                  style={{
                    ...styles.card,
                    backgroundImage: `url(${img})`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

// CSS Styles
const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "le-murmure",
    color: "white",
    left: "-40px",
    top: "-30px",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },
  contentContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: "50%",
    left: "48%",
    transform: "translateX(-50%)",
    width: "200px",
    zIndex: 10,
  },
  textContainer: {
    position: "absolute",
    top: "48%",
    left: "48%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    zIndex: 11,
  },
  word: {
    fontSize: "14rem",
    color: "#5D001E",
  },
  cardContainer: {
    position: "absolute",
    top: "-200px",
    left: "-100px",
    height: "100vh",
    width: "100vw",
    display: "flex",
    pointerEvents: "none",
  },
  card: {
    width: "150px",
    height: "200px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundSize: "cover",
    backgroundPosition: "center",
    pointerEvents: "auto",
  },
};
