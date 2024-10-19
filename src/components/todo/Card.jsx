import React from 'react';
import Button from '../Button';

export default function Card({ todo, onClick }) {
  return (
    <li
      key={todo.id}
      className="mb-2 flex items-center justify-between rounded bg-gray-100 p-2"
    >
      <span
        className={`flex-grow ${
          todo.completed ? 'text-gray-500 line-through' : ''
        }`}
      >
        {todo.text}
      </span>
      {!todo.completed && (
        <Button
          onClick={() => onClick('completed', todo.id)}
          className="mr-2 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
        >
          Complete
        </Button>
      )}
      {todo.completed && (
        <Button
          onClick={() => onClick('undo', todo.id)}
          className="hover:bg-yellow-6000 mr-2 rounded bg-yellow-500 px-2 py-1 text-white"
        >
          Undo
        </Button>
      )}
      <Button
        onClick={() => onClick('delete', todo.id)}
        className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
      >
        Delete
      </Button>
    </li>
  );
}
