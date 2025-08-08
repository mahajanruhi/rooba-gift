import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const heartfeltMessage = `Kaha se shuru karu… shayad shabdon mein sab kuch nahi aa paayega. Itne saalon se aap meri duniya ka hissa ho kabhi hum mile bichde toh kbi fer mile par ye jo humare bech hai jiska naam na hote huye bhi sab hai ye na kbhi badla na badalega, aur aaj bhi main sirf yahi chahti hoon ki aap hamesha khush raho. Agar aaj aapke saath hoti, toh shayad aur bhi zyada kuch kar paati… kabhi lagta hai ki agar hum saath hote toh bhi aap mujhse itna hi pyaar karte ya kahin bore ho jaate… par sach kahu, main kabhi hone hi nahi deti. Humare rishte ka spark main kabhi khatam na hone deti na hone dungi… pr koi na, jo hai abhi, jitna hai, vo bhi mere liye bahut hai… kyunki dil se toh hum hamesha saath hi hain❤️
Kabhi kabhi dukh hota hai ki kitna kuch kar sakti thi aapke liye… par kam se kam aaj ke din 
main aapko wish toh kar sakti hoon vrna Kuch saal toh aise bhi guzar gaye jab yeh bhi nahi kar paayi thi… 🥹
Aapka birthday mere liye hamesha special raha hai aur hamesha rahega..chahe saath ho ya na ho, baat ho ya na ho yeh tareekh main kabhi nahi bhool sakti… jis din Babaji ne duniya mein ek itna cute, sadu sa banda bheja tha jo ek pagal ladki ko aur bhi pagal kar de.🤩
Mere sadiyal… Happy Birthday to the most special person in my life. Aapko hamesha khush dekhna hi meri sabse badi dua hai. Mere Paras Sir… hamesha blessed raho… aur hamesha… hamesha mere rahe🫶

– Aapki Shadan 💕`;

function MessagePage() {
  const navigate = useNavigate();
 
  const [typedMessage, setTypedMessage] = useState('');
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (index < heartfeltMessage.length) {
      const timeout = setTimeout(() => {
        setTypedMessage((prev) => prev + heartfeltMessage[index]);
        setIndex(index + 1);
      }, );
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div style={styles.container}>
      
      <p style={styles.message}>{typedMessage}</p>
      <button style={styles.button} onClick={() => navigate('/couple-slideshow')}>
        Click Next 🎁
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffdde1, #ee9ca7)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  slideshow: {
    marginBottom: '20px'
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
  },
  message: {
    maxWidth: '700px',
    background: '#fff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    textAlign: 'left',
    whiteSpace: 'pre-line'
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#ff3366',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
};

export default MessagePage;
