import React from 'react';
import './Button.css'; // Add your own styles

const Button = ({ onClick, children, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
