import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const onHandleClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <header className="flex h-[56px] w-full items-center justify-center bg-white shadow-md">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center overflow-auto bg-white px-4 ">
        <h1 className="cursor-pointer px-4 py-2 font-bold">React App</h1>
        <Button
          className={
            'border-x-2 border-gray-200 bg-white px-4 text-gray-800 active:bg-gray-200'
          }
          onClick={() => onHandleClick('prop-drill')}
        >
          Prop drill
        </Button>
        <Button
          className={
            'border-r-2 border-gray-200 bg-white px-4 text-gray-800 active:bg-gray-200'
          }
          onClick={() => onHandleClick('context')}
        >
          Context
        </Button>
        <Button
          className={
            'border-r-2 border-gray-200 bg-white px-4 text-gray-800 active:bg-gray-200'
          }
          onClick={() => onHandleClick('redux')}
        >
          Redux
        </Button>
      </div>
    </header>
  );
}
