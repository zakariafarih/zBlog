import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/loadingAnimation.json';
import '@/styles/Fallback.css'; 

interface FallbackProps {
  message: string;
}

const Fallback: React.FC<FallbackProps> = ({ message }) => {
  return (
    <div className="fallback-wrapper">
      <div className="fallback-inner">
        <Lottie animationData={loadingAnimation} loop className="fallback-animation" />
        <p className="fallback-message">{message}</p>
      </div>
    </div>
  );
};

export default Fallback;
