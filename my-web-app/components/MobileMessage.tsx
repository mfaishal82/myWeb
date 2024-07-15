import React from "react";
import { FaTimes } from 'react-icons/fa';

interface MobileMessageProps {
  showMessage: boolean;
  closeMessage: () => void;
}

const MobileMessage: React.FC<MobileMessageProps> = ({ showMessage, closeMessage }) => {
  if (!showMessage) return null;

  return (
    <div className="mobile-message">
      <p>Sorry, this web is not responsive. Please view on a laptop or desktop.
        <a href="https://mfaishal-site.web.app/">Click here</a>
      </p>
      <button onClick={closeMessage} className="close-button">
        <FaTimes />
      </button>
    </div>
  );
};

export default MobileMessage;