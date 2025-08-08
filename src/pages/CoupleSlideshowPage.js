import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const coupleImages = [
  "/hand.jpeg",
  "/long.jpg", 
  "/moon.jpeg",
  "/couple.jpg",   
];   

function CoupleSlideshowPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % coupleImages.length);
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  // Autoplay music on first click
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", playMusic);
    };
    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💞 We (Us) 💞</h2>
      <div style={styles.imageWrapper}>
        <img
          src={coupleImages[current]}
          alt="Couple moment"
          style={styles.image}
        />
      </div>
      <button style={styles.button} onClick={() => navigate("/gift")}>
        Next  🎁
      </button>
      <audio ref={audioRef} src="/song.mp3" loop />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    background: "linear-gradient(to bottom, #fff0f5, #ffe4e1)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    color: "#ff1493",
    marginBottom: "20px",
  },
  imageWrapper: {
    width: "400px",
    height: "400px",
    overflow: "hidden",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1s ease-in-out",
  },
  button: {
    backgroundColor: "#ff69b4",
    color: "white",
    border: "none",
    padding: "12px 25px",
    fontSize: "1.1rem",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default CoupleSlideshowPage;
