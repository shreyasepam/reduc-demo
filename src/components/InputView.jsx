import React from 'react';
import Button from './Button';

export default function InputView({ value, onTextChange, onHandleAdd }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onHandleAdd();
    }
  };
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        className="flex-grow rounded-l-lg border px-3 py-2 focus:outline-none"
        placeholder="Add a new todo"
        onKeyPress={handleKeyPress}
      />
      <Button
        onClick={onHandleAdd}
        className="rounded-r-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </Button>
    </div>
  );
}
