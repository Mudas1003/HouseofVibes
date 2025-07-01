import React from "react";
import { useInView } from "react-intersection-observer";
import img1 from "./assets/launch1.jpeg";
import img4 from "./assets/launch2.jpeg";
import img3 from "./assets/launch3.jpeg";
import img2 from "./assets/launch4.jpeg";
import bg from "./assets/bg.png";

const NewLaunch = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const styles = {
    section: {
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "800px", // Full screen height
      width: "100vw",  // Full screen width
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      left: "-35px",
      top: "-30px",
  
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.6)",
      zIndex: 1,
    },
    container: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "90%",
      maxWidth: "1200px",
      gap: "40px",
      flexWrap: "wrap",
    },
    text: {
      color: "white",
      maxWidth: "500px",
      textAlign: "left",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-100px)",
      transition: "all 0.8s ease-out",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    title: {
      fontSize: "4.5rem",
      marginBottom: "10px",
      fontFamily: "Montaga"
    },
    description: {
      fontSize: "1.3rem",
      marginBottom: "30px",
      lineHeight: 1.6,
      fontFamily: "Montaga"

    },

    button: {
      padding: "10px 20px",
      fontSize: "1.2rem",
      border: "none",
      backgroundColor: "white",
      color: "black",
      fontWeight: 700,
      cursor: "pointer",
      transition: "background 0.3s ease",
      fontFamily: "Montaga"

    },
    carouselWrapper: {
      width: "50%",
      maxWidth: "600px",
      overflowX: "scroll",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    carousel: {
      display: "flex",
      gap: "20px",
      width: "max-content",
    },
    img: {
      width: "280px",
      height: "400px",
      objectFit: "cover",
      borderRadius: "10px",
      flexShrink: 0,
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.overlay} />
      <div style={styles.container}>
        <div style={styles.text} ref={ref}>
          <h2 style={styles.title}>New Launch</h2>
          <p style={styles.description}>
            Introducing our latest collection inspired by timeless trends and modern comfort.
            Handpicked fabrics, bold designs, and sustainable fashion—this is your moment to stand out.
          </p>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#eee")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            View More
          </button>
        </div>

        <div style={styles.carouselWrapper}>
          <div style={styles.carousel}>
            {[img1, img2, img3, img4].map((src, index) => (
              <img key={index} src={src} alt={`launch-${index}`} style={styles.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;
