import React, { useState } from 'react';
import jewelleryImage1 from './assets/jewellery1.webp';
import jewelleryImage2 from './assets/jewellery2.webp';
import jewelleryImage3 from './assets/jewellery3.webp';
import jewelleryImage4 from './assets/jewellery4.webp';
import jewelleryImage5 from './assets/jewellery5.webp';
import jewelleryImage6 from './assets/jewellery6.webp';
import nizamImageBroad from './assets/nizamBroad.jpg';
import nizamImageThin from './assets/nizamThin.jpg';
import gridImageLarge from './assets/gridLarge.jpg';
import gridImageSmall1 from './assets/gridSmall1.webp';
import gridImageSmall2 from './assets/gridSmall2.jpg';
import husbandImage1 from './assets/husband1.jpg';
import husbandImage2 from './assets/husband2.jpg';
import husbandImage3 from './assets/husband3.jpg';
import husbandImage4 from './assets/husband4.webp';
import showcaseVideo from './assets/video.mp4';
import { addToBag } from './bagUtils'; // ✅ adjust the path if needed


const JewelleryShowcase = () => {
  const [hearts, setHearts] = useState([false, false, false, false]);

  const toggleHeart = (index) => {
    setHearts((prev) =>
      prev.map((heart, i) => (i === index ? !heart : heart))
    );
  };

  const styles = {
    wrapper: {
      backgroundColor: 'white',
      width: '1280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Cinzel', serif",
      color: 'black',
      padding: '2rem',
      position: 'relative',
      margin: '0 auto',
      marginLeft: '-32px',
    },
    nameplate: {
      position: 'absolute',
      top: '10px',
      right: '1px',
      background: 'linear-gradient(135deg, #800000, #a52a2a)',
      color: 'white',
      padding: '15px 30px',
      fontSize: '45px',
      fontFamily: "'Cinzel', serif",
      borderRadius: '10px 0 0 10px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    },
    nameplateArrow: {
      width: '0',
      height: '0',
      borderTop: '30px solid transparent',
      borderBottom: '30px solid transparent',
      borderLeft: '20px solid #a52a2a',
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '120px',
      width: '100%',
      maxWidth: '800px',
    },
    jewelleryImage: {
      width: '600px',
      height: '600px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      marginBottom: '30px',
    },
    description: {
      fontFamily: "'Montaga', serif",
      fontSize: '18px',
      lineHeight: '1.6',
      textAlign: 'center',
      color: 'black',
      maxWidth: '600px',
      marginBottom: '20px',
    },
    exploreButton: {
      padding: '10px 30px',
      fontSize: '18px',
      fontFamily: "'Cinzel', serif",
      color: 'white',
      backgroundColor: 'black',
      border: '5px solid rgb(0, 0, 0)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      marginBottom: '60px',
    },
    nizamSection: {
      width: '100%',
      maxWidth: '1200px',
      marginTop: '60px',
      marginBottom: '60px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },
    nizamImageBroad: {
      width: '400px',
      height: '550px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    nizamImageThin: {
      width: '300px',
      height: '550px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    nizamTextContainer: {
      position: 'absolute',
      left: '550px',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
    },
    nizamHeading: {
      fontSize: '42px',
      fontFamily: "'Cinzel', serif",
      color: '#800000',
      marginBottom: '20px',
    },
    nizamDescription: {
      fontFamily: "'Montaga', serif",
      fontSize: '18px',
      lineHeight: '1.6',
      color: 'black',
    },
    gridSection: {
      width: '100%',
      maxWidth: '1200px',
      marginTop: '60px',
      marginBottom: '60px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto auto',
      gap: '20px',
      position: 'relative',
    },
    gridImageLarge: {
      gridColumn: '1 / 2',
      gridRow: '1 / 3',
      width: '100%',
      height: '600px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      position: 'relative',
    },
    gridImageSmall1: {
      width: '100%',
      height: '1200px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      position: 'relative',
    },
    gridImageSmall2: {
        width: '100%',
        height: '570px',
        objectFit: 'cover',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        top: '-600px'
      },
    gridOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: '0',
      transition: 'opacity 0.3s ease',
      borderRadius: '20px',
    },
    gridOverlayText: {
      fontFamily: "'Montaga', serif",
      fontSize: '24px',
      color: 'white',
      textAlign: 'center',
      marginBottom: '20px',
      padding: '0 20px',
    },
    discoverButton: {
      padding: '10px 30px',
      fontSize: '18px',
      fontFamily: "'Cinzel', serif",
      color: 'white',
      backgroundColor: 'black',
      border: '5px solid rgb(0, 0, 0)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      marginTop: '20px',
      borderRadius: '25px',
    },
    husbandSection: {
      width: '100%',
      maxWidth: '1200px',
      marginTop: '-650px',
      marginBottom: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    husbandHeading: {
      fontSize: '70px',
      fontFamily: "'Cinzel', serif",
      color: '#800000',
      marginBottom: '20px',
    },
    husbandDescription: {
      fontFamily: "'Montaga', serif",
      fontSize: '18px',
      lineHeight: '1.6',
      color: 'black',
      textAlign: 'center',
      maxWidth: '800px',
      marginBottom: '40px',
    },
    husbandGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '150px',
      width: '100%',
      maxWidth: '800px',
      marginLeft: '-100px',
    },
    husbandImageContainer: {
      position: 'relative',
      width: '400px',
      height: '500px',
    },
    husbandImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    husbandButtonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    },
    buyNowButton: {
      padding: '8px 20px',
      fontSize: '16px',
      fontFamily: "'Cinzel', serif",
      color: 'white',
      backgroundColor: 'black',
      border: '3px solid rgb(0, 0, 0)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      borderRadius: '20px',
    },
    heartEmoji: {
      fontSize: '24px',
      cursor: 'pointer',
    },
    videoSection: {
      width: '1345px',
      marginTop: '60px',
      marginBottom: '-60px',
      display: 'flex',
      justifyContent: 'center',
    },
    video: {
      width: '1400px',
      height: '700px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.wrapper}>
      <style>{`
        button:hover[style*="background-color: black"] {
          background-color: #800000;
          color: white;
          border-color: #800000;
        }
        div:hover > div[style*="opacity: 0"] {
          opacity: 1;
        }
        div:hover > img[style*="object-fit: cover"] {
          filter: 'brightness(50%)';
        }
      `}</style>

      <div style={styles.nameplate}>
        Jewellery
      </div>

      <div style={styles.itemContainer}>
        <img
          src={jewelleryImage1}
          alt="Jewellery Piece 1"
          style={styles.jewelleryImage}
        />
        <p style={styles.description}>
          This exquisite necklace from Darpan’s 2025 collection is a blend of tradition and elegance. Crafted with intricate gold filigree and adorned with sparkling rubies, it’s the perfect statement piece for any bridal ensemble.
        </p>
        <button style={styles.exploreButton} onClick={() => addToBag({
          name: "Jewellery",
          price: 140099,
          discount: 12,
          image: jewelleryImage3
        })}>Explore</button>

        <img
          src={jewelleryImage2}
          alt="Jewellery Piece 2"
          style={styles.jewelleryImage}
        />
        <p style={styles.description}>
          Our signature chandelier earrings feature delicate pearl drops and intricate silver work. Designed to complement the grandeur of Darpan’s Wedding Couture, these earrings add a touch of timeless sophistication.
        </p>
        <button style={styles.exploreButton}>Explore</button>

        <img
          src={jewelleryImage3}
          alt="Jewellery Piece 3"
          style={styles.jewelleryImage}
        />
        <p style={styles.description}>
          This regal tiara is adorned with shimmering emeralds and delicate gold accents. A masterpiece of craftsmanship, it crowns the bride with unparalleled elegance for her special day.
        </p>
        <button style={styles.exploreButton}>Explore</button>

        <img
          src={jewelleryImage4}
          alt="Jewellery Piece 4"
          style={styles.jewelleryImage}
        />
        <p style={styles.description}>
          The diamond-encrusted bangle from Darpan’s collection radiates luxury. Its intricate patterns and sparkling stones make it an ideal accessory for both bridal and festive occasions.
        </p>
        <button style={styles.exploreButton}>Explore</button>


        <img
          src={jewelleryImage6}
          alt="Jewellery Piece 6"
          style={styles.jewelleryImage}
        />
        <p style={styles.description}>
          Our statement ring combines a bold sapphire centerpiece with intricate gold detailing. This piece is designed to capture attention and elevate any wedding look with its royal allure.
        </p>
        <button style={styles.exploreButton}>Explore</button>
      </div>

      <div style={styles.nizamSection}>
        <img
          src={nizamImageThin}
          alt="Nizam Thin Piece"
          style={styles.nizamImageThin}
        />
        <div style={styles.nizamTextContainer}>
          <h2 style={styles.nizamHeading}>Gems of Nizam Quest</h2>
          <p style={styles.nizamDescription}>
            House of Vibes, in proud collaboration with the Hyderabad Government, presents an extraordinary unveiling of two of the most precious and timeless treasures from the legendary Nizam of Hyderabad’s collection. These exquisite pieces are not merely ornaments — they are symbols of a bygone royal era, steeped in history, luxury, and unmatched craftsmanship.
          </p>
        </div>
        <img
          src={nizamImageBroad}
          alt="Nizam Broad Piece"
          style={styles.nizamImageBroad}
        />
      </div>

      <div style={styles.gridSection}>
        <div style={{ position: 'relative' }}>
          <img
            src={gridImageLarge}
            alt="Grid Large"
            style={styles.gridImageLarge}
          />
          <div style={styles.gridOverlay}>
            <p style={styles.gridOverlayText}>
              This is not the end, explore more DESI AESTHETICS now
            </p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={gridImageSmall1}
            alt="Grid Small 1"
            style={styles.gridImageSmall1}
          />
          <div style={styles.gridOverlay}>
            <p style={styles.gridOverlayText}>
              This is not the end, explore more DESI AESTHETICS now
            </p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={gridImageSmall2}
            alt="Grid Small 2"
            style={styles.gridImageSmall2}
          />
          <div style={styles.gridOverlay}>
            <p style={styles.gridOverlayText}>
              This is not the end, explore more DESI AESTHETICS now
            </p>
          </div>
        </div>
      </div>

      <div style={styles.husbandSection}>
        <h2 style={styles.husbandHeading}>Husband-to-Be</h2>
        <p style={styles.husbandDescription}>
          Elevate the groom’s elegance with Darpan’s exclusive Husband-to-Be collection. Crafted with meticulous attention to detail, our sherwanis and Indo-western outfits blend traditional craftsmanship with modern sophistication, ensuring the groom shines on his special day.
        </p>
        <div style={styles.husbandGrid}>
          {[husbandImage1, husbandImage2, husbandImage3, husbandImage4].map(
            (image, index) => (
              <div key={index} style={styles.husbandImageContainer}>
                <img
                  src={image}
                  alt={`Husband Outfit ${index + 1}`}
                  style={styles.husbandImage}
                />
                <div style={styles.husbandButtonContainer}>
                  <button style={styles.buyNowButton} onClick={() => addToBag({
                    name: "Husband-to-be",
                    price: 49399,
                    discount: 29,
                    image: husbandImage1
                  })} >Buy Now</button>
                  <span
                    style={styles.heartEmoji}
                    onClick={() => toggleHeart(index)}
                  >
                    {hearts[index] ? '❤️' : '🤍'}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div style={styles.videoSection}>
        <video
          style={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={showcaseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default JewelleryShowcase;