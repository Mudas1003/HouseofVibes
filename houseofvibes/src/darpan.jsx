import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import centerImage from './assets/center.jpg';
import sideImage1 from './assets/slide2.jpg';
import sideImage2 from './assets/darpan.jpg';
import ovalImage from './assets/oval.jpeg';
import carousel1 from './assets/carousel1.jpg';
import carousel2 from './assets/carousel2.jpg';
import carousel3 from './assets/carousel3.jpg';
import carousel4 from './assets/carousel4.jpg';
import carousel5 from './assets/carousel5.jpg';
import carousel6 from './assets/carousel6.jpg';
import carousel7 from './assets/carousel7.jpg';
import carousel8 from './assets/carousel8.jpg';
import carousel9 from './assets/carousel9.jpg';
import carousel10 from './assets/carousel10.jpg';
import carousel11 from './assets/carousel11.jpg';
import signatureImage from './assets/signature.webp';
import logo from './assets/house.png';
import JewelleryShowcase from './jewellery';
import { addToBag } from './bagUtils'; // ✅ adjust the path if needed

const DarpanCollection = () => {
  const carouselRef = useRef(null);
  const signatureSectionRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [isSignatureVisible, setIsSignatureVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        const totalWidth = carouselRef.current.scrollWidth / 2;
        if (carouselRef.current.scrollLeft >= totalWidth) {
          carouselRef.current.scrollLeft -= totalWidth;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSignatureVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (signatureSectionRef.current) {
      observer.observe(signatureSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = {
    wrapper: {
      backgroundColor: 'white',
      width: '1280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Cinzel', serif",
      color: '#fff',
      padding: '2rem',
      overflow: 'hidden',
      marginTop: '-32px',
      marginLeft: '-32px',
      position: 'relative',
    },
    logo: {
      position: 'absolute',
      marginTop: '-90px',
      marginLeft: '-10px',
      zIndex: 1000,
      width: '250px',
      height: 'auto',
    },
    heading: {
      fontSize: '140px',
      color: '#800000',
      zIndex: 4,
      animation: 'slideDown 1s ease-out forwards',
      opacity: 0,
      marginTop: '80px',
      marginLeft: '450px',
    },
    subheading: {
      fontSize: '40px',
      color: 'black',
      zIndex: 4,
      fontFamily: 'Montaga',
      animation: 'zoomIn 1s ease-out 0.3s forwards',
      opacity: 0,
      width: '800px',
      textAlign: 'center',
      marginTop: '-70px',
      marginLeft: '800px',
    },
    cardContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '1000px',
      height: '600px',
      marginTop: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden',
      borderRadius: '20px',
      backgroundColor: '#fff',
      objectFit: 'cover',
      position: 'absolute',
    },
    centerCard: {
      width: '500px',
      height: '600px',
      zIndex: 3,
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'slideUp 1s ease-out forwards',
      marginTop: '-100px',
    },
    leftCard: {
      width: '300px',
      height: '550px',
      left: '0px',
      transform: 'rotate(-12deg)',
      zIndex: 2,
      animation: 'slideLeft 1s ease-out 0.5s forwards',
      opacity: 0,
      marginTop: '-100px',
    },
    rightCard: {
      width: '300px',
      height: '550px',
      right: '0px',
      transform: 'rotate(12deg)',
      zIndex: 2,
      animation: 'slideRight 1s ease-out 0.5s forwards',
      opacity: 0,
      marginTop: '-100px',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '200px',
      marginTop: '80px',
      flexWrap: 'wrap',
    },
    ovalImageContainer: {
      width: '400px',
      height: '500px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '8px solid transparent',
      background: 'linear-gradient(45deg, rgb(61, 18, 12), rgb(70, 9, 9), rgb(56, 51, 22))',
      boxShadow:
        '0 60px 100px rgba(70, 7, 7, 0.8), 0 0 40px rgba(88, 12, 12, 0.6), 0 20px 30px rgba(0, 0, 0, 0.3)',
      transform: 'perspective(800px) rotateX(10deg) rotateY(-10deg)',
      marginTop: '50px',
    },
    ovalImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.1)',
    },
    weddingTextContainer: {
      width: '500px',
    },
    weddingHeading: {
      fontSize: '50px',
      color: 'black',
      fontFamily: "'Cinzel', serif",
      marginTop: '-10px',
      marginLeft: '-30px',
    },
    weddingBox: {
      width: '100%',
      background: 'linear-gradient(135deg, #800000, #a52a2a)',
      color: 'white',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.1) inset',
      fontSize: '18px',
      lineHeight: '1.8',
      fontFamily: "'Montaga', serif",
      marginLeft: '-40px',
    },
    carouselWrapper: {
      width: '1350px',
      marginTop: '100px',
    },
    carouselHeading: {
      fontSize: '80px',
      textAlign: 'center',
      color: '#800000',
      marginBottom: '20px',
      fontFamily: "'Cinzel', serif",
    },
    carousel: {
      display: 'flex',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      paddingBottom: '20px',
      gap: '40px',
      paddingLeft: '30px',
    },
    carouselItem: {
      minWidth: '300px',
      height: '400px',
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      flex: '0 0 auto',
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease-in-out',
    },
    buyButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#800000',
      color: 'white',
      padding: '10px 20px',
      fontSize: '18px',
      border: 'none',
      borderRadius: '10px',
      opacity: 0,
      cursor: 'pointer',
      transition: 'opacity 0.3s ease-in-out',
    },
    carouselTextContainer: {
      marginTop: '30px',
      textAlign: 'center',
      maxWidth: '760px',
      color: 'black',
      fontFamily: "'Montaga', serif",
      fontSize: '18px',
      lineHeight: '1.6',
      marginLeft: '320px',
    },
    exploreButton: {
      marginTop: '20px',
      padding: '10px 30px',
      fontSize: '18px',
      fontFamily: "'Cinzel', serif",
      color: '#800000',
      backgroundColor: 'transparent',
      border: '3px solid #800000',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      marginLeft: '-20px',
    },
    signatureSection: {
      width: '100%',
      maxWidth: '1000px',
      marginTop: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    signatureHeading: {
      fontSize: '75px',
      color: '#800000',
      fontFamily: "'Cinzel', serif",
      textAlign: 'center',
      marginBottom: '40px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      marginTop: '-20px',
    },
    signatureImageContainer: {
      position: 'relative',
      width: '1000px',
      height: '520px',
      overflow: 'hidden',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    signatureImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    curtainLeft: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      background: 'linear-gradient(to right, #800000, #a52a2a)',
      transform: isSignatureVisible ? 'translateX(-100%)' : 'translateX(0)',
      transition: 'transform 5s ease-out',
      zIndex: 2,
    },
    curtainRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      background: 'linear-gradient(to left, #800000, #a52a2a)',
      transform: isSignatureVisible ? 'translateX(100%)' : 'translateX(0)',
      transition: 'transform 5s ease-out',
      zIndex: 2,
    },
    signatureText: {
      maxWidth: '850px',
      color: 'black',
      fontFamily: "'Montaga', serif",
      fontSize: '18px',
      lineHeight: '1.6',
      textAlign: 'center',
      marginTop: '30px',
    },
    signatureTable: {
      width: '100%',
      maxWidth: '500px',
      marginTop: '30px',
      borderCollapse: 'collapse',
      fontFamily: "'Montaga', serif",
      color: 'black',
    },
    signatureTableRow: {
      borderBottom: '2px solid rgb(168, 160, 160)',
    },
    signatureTableCell: {
      padding: '15px',
      fontSize: '16px',
      textAlign: 'center',
    },
    makeItYoursButton: {
      marginTop: '30px',
      padding: '10px 30px',
      fontSize: '19px',
      fontFamily: "'Cinzel', serif",
      color: 'white',
      backgroundColor: 'black',
      border: '5px solid rgb(0, 0, 0)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },
  };

  const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11];

  return (
    <>
    <div style={styles.wrapper}>
      <Link to="/" style={styles.logo}>
        <img src={logo} alt="Company Logo" style={{ width: '100%', height: 'auto' }} />
      </Link>

      <style>{`
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(100%); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideLeft {
          from { transform: translateX(-50%) rotate(0deg); opacity: 0; left: 50%; }
          to { transform: rotate(-12deg); opacity: 1; left: 0px; }
        }
        @keyframes slideRight {
          from { transform: translateX(-50%) rotate(0deg); opacity: 0; right: 50%; }
          to { transform: rotate(12deg); opacity: 1; right: 0px; }
        }
        @keyframes slideDown {
          from { transform: translateX(-50%) translateY(-200px); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: translateX(-50%) scale(0.5); opacity: 0; }
          to { transform: translateX(-50%) scale(1); opacity: 1; }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        div[style*="overflow-x: auto"] {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
        button:hover[style*="background-color: transparent"] {
          background-color: #800000;
          color: white;
        }
        .typewriter {
          animation: ${isSignatureVisible ? 'typewriter 2s steps(40, end) forwards' : 'none'};
        }
      `}</style>

      <h1 style={styles.heading}>Darpan</h1>
      <h2 style={styles.subheading}>The Wedding Collection</h2>

      <div style={styles.cardContainer}>
        <div style={{ ...styles.card, ...styles.centerCard }}>
          <img src={centerImage} alt="Center" style={styles.img} />
        </div>
        <div style={{ ...styles.card, ...styles.leftCard }}>
          <img src={sideImage1} alt="Side 1" style={styles.img} />
        </div>
        <div style={{ ...styles.card, ...styles.rightCard }}>
          <img src={sideImage2} alt="Side 2" style={styles.img} />
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div style={styles.ovalImageContainer}>
          <img src={ovalImage} alt="Wedding Oval" style={styles.ovalImage} />
        </div>
        <div style={styles.weddingTextContainer}>
          <h2 style={styles.weddingHeading}>Wedding Couture 2025</h2>
          <div style={styles.weddingBox}>
            <p>
              Discover the elegance of Darpan's Wedding Collection for 2025. Our curated designs blend timeless tradition with modern sophistication, featuring luxurious fabrics and intricate embroidery.
              Whether it's the grandeur of bridal lehengas, the sophistication of groom sherwanis, or the delicate charm of bridesmaids' ensembles, every piece is crafted to create unforgettable moments.
              This season, elevate your celebration with a palette of royal hues, premium craftsmanship, and silhouettes that speak to your soul. Darpan brings to life the dream wedding you've always imagined.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.carouselWrapper}>
        <h2 style={styles.carouselHeading}>#NotTheBride</h2>
        <div
          style={styles.carousel}
          ref={carouselRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              style={styles.carouselItem}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('button').style.opacity = 1;
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('button').style.opacity = 0;
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img src={img} alt={`Carousel ${index}`} style={styles.carouselImage} />
              <button style={styles.buyButton} onClick={() => addToBag({
                name: "NotTheBride",
                price: 3399,
                discount: 18,
                image: carousel11
              })}>Buy Now</button>
            </div>
          ))}
        </div>
        <div style={styles.carouselTextContainer}>
          <p>
            Explore our exclusive #NotTheBride collection, designed for the wedding entourage.
            From elegant bridesmaid dresses to sophisticated guest attire, each piece complements the grandeur of Darpan's Wedding Couture 2025.
          </p>
          <button style={styles.exploreButton}>Explore</button>
        </div>
      </div>

      <div style={styles.signatureSection} ref={signatureSectionRef}>
        <h2 style={styles.signatureHeading} className={isSignatureVisible ? 'typewriter' : ''}>
          The Signature Piece
        </h2>
        <div style={styles.signatureImageContainer}>
          <img src={signatureImage} alt="Signature Piece" style={styles.signatureImage} />
          <div style={styles.curtainLeft}></div>
          <div style={styles.curtainRight}></div>
        </div>
        <p style={styles.signatureText}>
          The Signature Piece of Darpan's 2025 collection is a masterpiece of elegance and artistry. This exquisite bridal saree features handwoven silk adorned with intricate zari and sequin work, embodying the essence of royal heritage. Designed to make every bride feel like royalty, its flowing silhouette and rich maroon palette create a timeless statement for the modern bride.
        </p>
        <table style={styles.signatureTable}>
          <tbody>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}>Fabric</td>
              <td style={styles.signatureTableCell}>Pure Handwoven Silk</td>
            </tr>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}>Embroidery</td>
              <td style={styles.signatureTableCell}>Zari, Sequin, and Pearl Work</td>
            </tr>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}></td>
            </tr>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}>Color</td>
              <td style={styles.signatureTableCell}>Royal Maroon with Gold Accents</td>
            </tr>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}>Silhouette</td>
              <td style={styles.signatureTableCell}>A-Line with Flared Dupatta</td>
            </tr>
            <tr style={styles.signatureTableRow}>
              <td style={styles.signatureTableCell}>Craftsmanship</td>
              <td style={styles.signatureTableCell}>Handcrafted by Master Artisans</td>
            </tr>
          </tbody>
        </table>
        <button style={styles.makeItYoursButton} onClick={() => addToBag({
          name: "Signature Piece",
          price: 180399,
          discount: 25,
          image: signatureImage
        })}>Make It Yours</button>
      </div>
    </div>
    <JewelleryShowcase />
    </>
  );
};

export default DarpanCollection;