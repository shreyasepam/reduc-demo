import React from 'react';
import Card from './Card';
import InputView from '../InputView';

export default function TodoPropDrill({ todos, input, onTextChange, onClickHandle }) {

  return (
    <div className="mx-auto my-6 max-w-md rounded-lg bg-white p-6 shadow-xl">
      <h1 className="mb-4 text-2xl font-bold">Todo App</h1>
      <InputView
        value={input}
        onHandleAdd={() => onClickHandle('add', input)}
        onTextChange={onTextChange}
      />
      <ul className='max-h-[74%] overflow-y-auto'>
        {todos?.map((todo) => (
          <Card todo={todo} onClick={onClickHandle} />
        ))}
      </ul>
    </div>
  );
}
