import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

const faqs = [
  {
    question: "Q. What is House of Vibes?",
    answer:
      "House of Vibes is a fashion brand that blends modern aesthetics with traditional vibes, offering a wide range of stylish clothing and accessories.",
  },
  {
    question: "Q. Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping rates and delivery times vary depending on your location.",
  },
  {
    question: "Q. Can I return or exchange a product?",
    answer:
      "Absolutely. We offer a 7-day return/exchange policy for unused products in original packaging.",
  },
  {
    question: "Q. How do I track my order?",
    answer:
      "Once your order is shipped, you'll receive a tracking number via email to monitor its journey.",
  },
  {
    question: "Q. Are your clothes sustainable?",
    answer:
      "We're committed to sustainability and use eco-friendly materials and practices wherever possible.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [typingText, setTypingText] = useState("");
  const typingPrompt = "Ask your doubt ?";
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (inputValue !== "") return;
      if (forward) {
        setTypingText(typingPrompt.slice(0, i + 1));
        i++;
        if (i === typingPrompt.length) forward = false;
      } else {
        setTypingText(typingPrompt.slice(0, i - 1));
        i--;
        if (i === 0) forward = true;
      }
    }, 120);
    return () => clearInterval(interval);
  }, [inputValue]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-input-container">
        <input
          type="text"
          className="faq-input"
          placeholder={typingText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="send-btn">
          <FaPaperPlane />
          Send
        </button>
      </div>

      <style>{`
        .faq-section {
          padding: 80px 20px;
          background-color: #f8f8f8;
          font-family: 'Montaga', sans-serif;
          color: #333;
          width: 1320px;
          margin: 0 auto;
          margin-left: -35px;
        }

        .faq-title {
          text-align: center;
          font-size: 4rem;
          margin-bottom: 60px;
          color: black;
          margin-top: -20px;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 16px 0;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.3rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .faq-question:hover {
          color: rgb(45, 138, 19);
        }

        .faq-toggle {
          font-size: 1.7rem;
          font-weight: bold;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          opacity: 1;
          margin-top: 12px;
        }

        .faq-answer p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: black;
        }

        .faq-input-container {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .faq-input {
          width: 600px;
          padding: 14px 60px 14px 20px;
          font-size: 1rem;
          border-radius: 50px;
          border: 2px solid #fff;
          outline: none;
          background: #000;
          color: #fff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-input:focus {
          border-color:rgb(226, 215, 215);
          box-shadow: 0 0 20px rgba(0, 0, 0, 1);
        }

        .send-btn {
          position: absolute;
          right: calc(50% - 250px - 85px);
          height: 40px;
          padding: 0 18px;
          background-color: #2e8b57;
          border: none;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          cursor: pointer;
          font-size: 0.95rem;
          gap: 8px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .send-btn:hover {
          background-color: #256c45;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(46, 139, 87, 0.4);
        }

        .send-btn svg {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .faq-title {
            font-size: 2.2rem;
          }

          .faq-question {
            font-size: 1rem;
          }

          .faq-toggle {
            font-size: 1.3rem;
          }

          .faq-input {
            width: 90%;
          }

          .send-btn {
            right: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
