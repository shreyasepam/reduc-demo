import React from 'react';

const default_className = "focus:shadow-outline transform font-semibold transition duration-150 ease-in-out focus:outline-none active:scale-95"

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`${default_className} ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
