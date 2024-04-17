import React, { useState, useEffect } from 'react';
import './Tooltip.css';

const TextTooltip = ({ children, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    let tooltipTimeout;

    if (isHovered) {
      tooltipTimeout = setTimeout(() => {
        setShowTooltip(true);
      }, 250); // 250ms delay before showing the tooltip
    } else {
      setShowTooltip(false);
    }

    return () => clearTimeout(tooltipTimeout);
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
      {isHovered && showTooltip && (
        <div className="tooltip">
          {content && <div>{content}</div>}
        </div>
      )}
    </div>
  );
};

export default TextTooltip;