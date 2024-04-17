import React, { useState, useEffect } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, content, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    let imageTimeout;
    if (isHovered) {
      imageTimeout = setTimeout(() => {
        setShowImage(true);
      }, 250); // 3-second delay
    } else {
      setShowImage(false);
    }
    return () => clearTimeout(imageTimeout);
  }, [isHovered]);

  return (
    <div className="tooltip-wrapper">
      <div
        className="tooltip-trigger"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {children}
      </div>
      {isHovered && (
        <div className={`tooltip ${showImage ? 'show-image' : ''}`}>
          {imageUrl && <img src={imageUrl} alt="Tooltip" />}
          {content && <div className="contentMax">{content}</div>}
        </div>
      )}
    </div>
  );
};

export default Tooltip;