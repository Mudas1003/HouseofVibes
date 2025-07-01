import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer-container {
            background-color: #ffffff;
            color: #333;
            font-family: 'Segoe UI', sans-serif;
            padding: 40px 20px;
            width: 1320px;
            margin: 0 auto;
            margin-left: -35px;
            margin-bottom: -40px;
          }

          .newsletter-box {
            background-color:rgb(19, 51, 6);
            color: #fff;
            border-radius: 20px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 40px;
            width: 1150px;
          }

          @media (min-width: 768px) {
            .newsletter-box {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          }

          .newsletter-box h2 {
            font-size: 28px;
            margin-bottom: 10px;
            font-family: Montaga;
          }

          .newsletter-box p {
            font-size: 14px;
            color: #c7d1d1;
            max-width: 400px;
          }

          .newsletter-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          @media (min-width: 768px) {
            .newsletter-form {
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              width: auto;
            }
          }

          .newsletter-input {
            padding: 10px 20px;
            border-radius: 50px;
            border: none;
            outline: none;
            color: black;
            background-color:rgb(209, 206, 29);
            width: 300px;
          }

          .subscribe-button {
            background-color:rgb(255, 239, 97);
            color: #000;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .subscribe-button:hover {
            background-color:rgb(238, 204, 13);
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 30px;
            border-top: 1px solid #eee;
            padding-top: 30px;
          }

          @media (min-width: 768px) {
            .footer-links {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
            }
          }

          .brand-section {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-left:20px;
          }

          .brand {
            font-size: 22px;
            font-weight: bold;
            color:rgb(19, 51, 6);
          }

          .brand-desc {
            font-size: 15px;
            color: #888;
          }

          .footer-columns {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          @media (min-width: 768px) {
            .footer-columns {
              flex-direction: row;
              gap: 40px;
            }
          }

          .footer-column {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-left: -300px;
            margin-top: -25px
          }

          .footer-column h4 {
            margin-bottom: 6px;
            font-weight: 600;
          }

          .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-column li {
            font-size: 14px;
            color: #666;
            margin-bottom: 4px;
          }
        `}
      </style>

      <div className="footer-container">
        <div className="newsletter-box">
          <div>
            <h2>Subscribe our newsletter</h2>
            <p>
            Subscribe to the House of Vibes newsletter and be the first to get exclusive updates, style tips, and insider insights to elevate your fashion game!
            </p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="brand-section">
            <div className="brand">↗ houseofvibes</div>
            <p className="brand-desc">Make your fashionable life eassyyy</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Features</h4>
              <ul>
                <li>Payment</li>
                <li>Card</li>
                <li>Pricing</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li>Help</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
