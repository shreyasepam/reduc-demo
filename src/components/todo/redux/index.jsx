import React from 'react';
import Card from '../Card';
import InputView from '../../InputView';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_CONST } from '../../../redux/todo/todoSlice';

export default function TodoRedux() {
  const dispatch = useDispatch();
  const { data, input } = useSelector((state) => state.todos);

  const onClickHandle = (type, data) => {
    dispatch({ type: TODO_CONST[type], payload: data });
  };

  const onTextChange = (value) => {
    dispatch({ type: TODO_CONST.input, payload: value });
  };

  return (
    <div className="mx-auto my-6 max-w-md rounded-lg bg-white p-6 shadow-xl">
      <h1 className="mb-4 text-2xl font-bold">Todo App Redux</h1>
      <InputView
        value={input}
        onHandleAdd={() => onClickHandle('add', input)}
        onTextChange={onTextChange}
      />
      <ul className="max-h-[74%] overflow-y-auto">
        {data?.map((todo) => (
          <Card key={todo.id} todo={todo} onClick={onClickHandle} />
        ))}
      </ul>
    </div>
  );
}
