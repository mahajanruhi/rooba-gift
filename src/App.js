import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MessagePage from './pages/MessagePage';
import CoupleSlideshowPage from './pages/CoupleSlideshowPage';
import GiftPage from './pages/GiftPage';

function App() {
  const audioRef = useRef(null);

  return (
    <>
      {/* Correct path to song.mp3 using PUBLIC_URL */}
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/song.mp3`} loop />

      <Routes>
        <Route path="/" element={<LandingPage audioRef={audioRef} />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/couple-slideshow" element={<CoupleSlideshowPage />} />
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
    </>
  );
}

export default App;
