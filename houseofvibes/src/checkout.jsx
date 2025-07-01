import React, { useEffect, useState } from 'react';
import { getBagItems, getTotalPrice, clearBag } from './bagUtils';
import { Link } from "react-router-dom";
import upi from "./assets/rzp.jpeg";

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const bagItems = getBagItems();
    setItems(bagItems);
    setTotal(getTotalPrice());
  }, []);

  const handleClearBag = () => {
    clearBag();
    setItems([]);
    setTotal(0);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_9HLJkYEi3yVAJs", // Replace with your test/live key
      amount: Math.round((total - total * 0.1 + 50) * 100), // in paise
      currency: "INR",
      name: "House of Vibes",
      description: "Thank you for shopping",
      image: "/logo.png", // optional
      handler: function (response) {
        setPaymentSuccess(true);
        handleClearBag();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#2e7d32",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.left}>
          <h2 style={styles.title}>Checkout</h2>

          <div style={styles.alert}>
            <span style={styles.alertIcon}>🛡️</span> Your payment is secure with us
          </div>

          <div style={styles.cardLogos}>
            {[ 
              { type: 'card', img: 'https://img.icons8.com/color/48/mastercard-logo.png' },
              { type: 'upi', img: upi },
            ].map((logo, idx) => (
              <img
                key={idx}
                src={logo.img}
                alt={logo.type}
                onClick={() => setPaymentMethod(logo.type)}
                style={{
                  ...styles.logo,
                  border: paymentMethod === logo.type ? '2px solid #2e7d32' : '2px solid transparent',
                }}
              />
            ))}
          </div>

          {paymentMethod === 'card' ? (
            <div style={styles.form}>
              <input placeholder="Name on Card" style={styles.input} />
              <input placeholder="Card Number" style={styles.input} />
              <div style={styles.row}>
                <input placeholder="MM/YY" style={{ ...styles.input, flex: 1, marginRight: 10 }} />
                <input placeholder="CVV" style={{ ...styles.input, flex: 1 }} />
              </div>
            </div>
          ) : (
            <div style={styles.form}>
              <input placeholder="Razorpay Phone No." style={styles.input} />
            </div>
          )}

          <div style={styles.form}>
            <h2 style={{ marginTop: 30 }}>Delivery Address</h2>
            <input placeholder="Full Name" style={styles.input} />
            <input placeholder="Mobile Number" style={styles.input} />
            <input placeholder="Email Address" style={styles.input} />
            <input placeholder="Street Address" style={styles.input} />
            <input placeholder="City" style={styles.input} />
            <div style={styles.row}>
              <input placeholder="State" style={{ ...styles.input, flex: 1, marginRight: 10 }} />
              <input placeholder="ZIP" style={{ ...styles.input, flex: 1 }} />
            </div>
          </div>

          {/* 🔁 Always visible link */}
          <div style={{ marginTop: 70 }}>
  <Link style={styles.backBtn} to="/">← Back to Shopping</Link>
</div>
        </div>

        <div style={styles.right}>
          <h3 style={styles.sectionTitle}>Order Details</h3>
          {items.length === 0 ? (
            <p>Your bag is empty.</p>
          ) : (
            <>
              {items.map((item, index) => (
                <div key={index} style={styles.orderItem}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div style={styles.itemInfo}>
                    <div>
                      {item.name}
                      <div style={styles.quantity}>Qty: {item.quantity || 1}</div>
                    </div>
                    <div style={styles.price}>₹{Math.round(item.price * (1 - item.discount / 100))}</div>
                  </div>
                </div>
              ))}

              <div style={styles.summary}>
                <h3 style={styles.sectionTitle}>Order Summary</h3>
                <div style={styles.summaryRow}><span>Subtotal</span><span>₹{Math.round(total)}</span></div>
                <div style={styles.summaryRow}><span>Shipping</span><span>Free</span></div>
                <div style={styles.summaryRow}><span>Discount</span><span>-₹{Math.round(total * 0.1)}</span></div>
                <div style={styles.summaryRow}><span>Service Fee</span><span>₹50</span></div>
                <div style={{ ...styles.summaryRow, fontWeight: 'bold', marginTop: 10 }}>
                  <span>Total</span>
                  <span>₹{Math.round(total - total * 0.1 + 50)}</span>
                </div>
              </div>

              <button onClick={handleRazorpayPayment} style={styles.checkoutBtn}>Confirm & Pay</button>
              <button onClick={handleClearBag} style={styles.cancelBtn}>Clear</button>

              {paymentSuccess && (
                <div style={{ marginTop: 30, textAlign: 'center' }}>
                  <div style={{ fontSize: 50, color: 'green' }}>✔</div>
                  <h3 style={{ color: 'green' }}>Payment Successful</h3>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// Styles
const styles = {
  wrapper: {
    backgroundColor: '#e0f2f1',
    minHeight: '100vh',
    width: '1275px',
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    marginTop: '-40px',
    marginLeft: '-40px',
    fontFamily: "Monataga",
    marginBottom:'-30px'
  },
  card: {
    display: 'flex',
    maxWidth: 1100,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  left: {
    flex: 1.4,
    padding: 40,
    borderRight: '1px solid #eee',
    position: 'relative',
  },
  right: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: '55px',
    fontWeight: 600,
    marginBottom: 20,
    color: '#2e7d32',
    marginTop: '10px'
  },
  alert: {
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
    padding: '10px 15px',
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  alertIcon: {
    fontSize: 18,
  },
  cardLogos: {
    display: 'flex',
    gap: 10,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 6,
    padding: 4,
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  row: {
    display: 'flex',
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: '1px solid #b2dfdb',
    backgroundColor: '#f0fdf4',
    fontSize: 14,
    width: '100%',
    boxSizing: 'border-box',
    color: 'black'
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 15,
    marginTop: 5
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    borderBottom: '1px solid #eee',
    paddingBottom: 10,
  },
  itemImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
    objectFit: 'cover',
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 18,
  },
  quantity: {
    fontSize: 16,
    color: '#757575',
  },
  price: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  summary: {
    marginTop: 30,
    fontSize: 18,
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  checkoutBtn: {
    marginTop: 30,
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '14px 0',
    width: '100%',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 19,
    border: 'none',
    cursor: 'pointer',
  },
  cancelBtn: {
    marginTop: 10,
    backgroundColor: '#fff',
    color: 'red',
    padding: '14px 0',
    width: '100%',
    borderRadius: 10,
    fontSize: 18,
    border: '2px solid red',
    cursor: 'pointer',
  },
  backBtn: {
    left: 40,
    backgroundColor: 'transparent',
    color: '#1565c0',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    paddingTop: 20,
    marginTop: '90px',
    marginLeft: '10px'
  },
};
