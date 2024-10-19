import React from 'react';

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={` ${className} focus:shadow-outline transform font-semibold transition duration-150 ease-in-out focus:outline-none active:scale-95 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
