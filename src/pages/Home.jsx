import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const onHandleClick = (path) => {
    navigate(`/${path}`);
  };
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex select-none  items-center justify-center gap-8 p-4">
        <Button
          className={
            'h-[100px] w-[100px] rounded-md border-2 bg-white bg-gradient-to-r  from-gray-300 to-gray-500 px-0 py-0 font-semibold text-white shadow-sm'
          }
          onClick={() => onHandleClick('prop-drill')}
        >
          Prop drill
        </Button>
        <Button
          className={
            'h-[100px] w-[100px] rounded-md border-2 bg-white  bg-gradient-to-r  from-gray-300 to-gray-500 px-0 py-0 font-semibold text-white shadow-sm'
          }
          onClick={() => onHandleClick('context')}
        >
          Context
        </Button>
        <Button
          className={
            'h-[100px] w-[100px] rounded-md border-2 bg-white bg-gradient-to-r  from-gray-300 to-gray-500 px-0 py-0 font-semibold text-white shadow-sm'
          }
          onClick={() => onHandleClick('redux')}
        >
          Redux
        </Button>
      </div>
    </div>
  );
}
