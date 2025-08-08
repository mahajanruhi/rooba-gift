import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const promiseNote = `Bas ek din… jab hum saath honge… kabhi na kabhi chahe ek din ke liye..
main apko btayungi ki ap kitne special ho jisme koi kami nahi hogi… sirf hum honge, humara pyaar aur ek dusre ke saath ki khushi… 💕`;

function GiftPage() {
  const navigate = useNavigate();
  const [typedPromise, setTypedPromise] = useState('');
  const [index, setIndex] = useState(0);
  const [giftOpen, setGiftOpen] = useState(false);

  useEffect(() => {
    if (index < promiseNote.length) {
      const timeout = setTimeout(() => {
        setTypedPromise((prev) => prev + promiseNote[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div style={styles.container}>
      
      <div
        style={{ ...styles.giftBox, transform: giftOpen ? 'rotate(10deg) scale(1.2)' : 'none' }}
        onClick={() => setGiftOpen(!giftOpen)}
      >
        🎂
      </div>
      <p style={styles.note}>{typedPromise}</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Back to Start ⬅️
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #f9e1f3, #fbc2eb)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  giftBox: {
    fontSize: '5rem',
    cursor: 'pointer',
    transition: 'transform 0.5s ease',
    marginBottom: '20px'
  },
  note: {
    maxWidth: '600px',
    background: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    whiteSpace: 'pre-line'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '1.1rem',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
};

export default GiftPage;
