import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage({ audioRef }) {
  const navigate = useNavigate();

  // Play music on first click
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 55; // 50 sec se start
        audioRef.current.play().catch(() => { });
      }
      document.removeEventListener('click', enableAudio);
    };
    document.addEventListener('click', enableAudio);
    return () => document.removeEventListener('click', enableAudio);
  }, [audioRef]);

  return (
    <div style={styles.container}>
     
      <h1 style={styles.title}>🎉 Happy Birthday My Love 🎉</h1>
      <p style={styles.subtitle}>A Small effort from my side…</p>
      <button style={styles.button} onClick={() => navigate('/message')}>
        Click here 💌
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    background: 'linear-gradient(to bottom, #ffe6f0, #ffc2d1)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '3rem',
    color: '#ff3366',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '30px'
  },
  button: {
    backgroundColor: '#ff66b2',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2rem',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
};

export default LandingPage;
