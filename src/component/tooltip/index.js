import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, content, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

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
        <div className="tooltip">
          {imageUrl && <img src={imageUrl} alt="Tooltip" />}
          {content && <div>{content}</div>}
        </div>
      )}
    </div>
  );
};

export default Tooltip;