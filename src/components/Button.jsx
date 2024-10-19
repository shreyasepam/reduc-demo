import React from 'react';

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`focus:shadow-outline h-full transform px-8 py-2 font-semibold transition duration-150 ease-in-out focus:outline-none active:scale-95  ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
