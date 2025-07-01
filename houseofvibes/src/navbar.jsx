import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import topIcon from "./assets/5.png";
import bottomIcon from "./assets/7.png";
import shoesIcon from "./assets/6.png";
import accessoriesIcon from "./assets/8.png";
import logo from "./assets/house.png";
import bagIcon from "./assets/shopping-bag.png"; // ✅ NEW: Add a bag icon (your own or use emoji/icon)

const navItems = [
  { icon: topIcon, label: "Tops", path: "/tops" },
  { icon: bottomIcon, label: "Bottoms", path: "/bottoms" },
  { icon: shoesIcon, label: "Shoes", path: "/shoes" },
  { icon: accessoriesIcon, label: "Accessories", path: "/accessories" },
];

const Navbar = () => {
  const [bagCount, setBagCount] = useState(0);
  const navigate = useNavigate();

  // ✅ NEW: Update bag count from localStorage
  useEffect(() => {
    const updateBag = () => {
      const items = JSON.parse(localStorage.getItem("bag")) || [];
      setBagCount(items.length);
    };

    updateBag();
    window.addEventListener("storage", updateBag);
    return () => window.removeEventListener("storage", updateBag);
  }, []);

  const goToCheckout = () => navigate("/checkout");

  return (
    <>
      <style>{`
        .nav-item:hover {
          transform: translateY(-5px);
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.4), 0 0 10px #ffffff60 inset;
        }

        .nav-item:hover .nav-icon {
          transform: scale(1.3) rotate(6deg);
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9));
        }

        .nav-item:hover .nav-label {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-icon {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .sidebar {
          animation: shine 4s infinite ease-in-out;
        }

        .nav-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes shine {
          0% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 30px rgba(255,255,255,0.25); }
          100% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
        }
      `}</style>

      <div style={styles.sidebar} className="sidebar">
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>

        <div style={styles.navItems}>
          {navItems.map((item, index) => (
            <Link to={item.path} key={index} className="nav-link">
              <div className="nav-item" style={styles.navItem}>
                <div style={styles.iconContainer}>
                  <img src={item.icon} alt={item.label} className="nav-icon" style={styles.icon} />
                </div>
                <span className="nav-label" style={styles.label}>
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ NEW: Bag Icon */}
        <div onClick={goToCheckout} style={styles.bagContainer}>
          <img src={bagIcon} alt="Bag" style={styles.bagIcon} />
          {bagCount > 0 && (
            <div style={styles.badge}>{bagCount}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

// ✅ Styles
const styles = {
  sidebar: {
    position: "fixed",
    top: "50%",
    right: "15px",
    transform: "translateY(-50%)",
    width: "60px",
    background: "rgba(255, 255, 255, 0.33)",
    backdropFilter: "blur(25px)",
    borderRadius: "30px",
    padding: "20px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1000,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
  },
  logo: {
    width: "70px",
    height: "70px",
    marginBottom: "25px",
    borderRadius: "16px",
    objectFit: "cover",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navItems: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    alignItems: "center",
  },
  navItem: {
    position: "relative",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
  },
  iconContainer: {
    borderRadius: "50%",
    padding: "8px",
  },
  icon: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  label: {
    position: "absolute",
    right: "60px",
    background: "#000",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    opacity: 0,
    transform: "translateX(10px)",
    pointerEvents: "none",
    transition: "opacity 0.25s ease, transform 0.25s ease",
  },

  // ✅ NEW: Bag Styles
  bagContainer: {
    marginTop: "40px",
    position: "relative",
    cursor: "pointer",
  },
  bagIcon: {
    width: "34px",
    height: "34px",
    filter: "drop-shadow(0 0 5px rgba(0,0,0,0.4))",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    backgroundColor: "#ff0055",
    color: "white",
    fontSize: "12px",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)",
  },
};
