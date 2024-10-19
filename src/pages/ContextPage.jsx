import React, { useState } from 'react';
import { TodoContextProvider } from '../components/todo/context/provider';
import TodoContext from '../components/todo/context';

export default function PropsContext() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const onClickHandle = (type, data) => {
    if (type === 'completed') {
      setTodos(
        todos.map((todo) =>
          todo.id === data ? { ...todo, completed: true } : todo
        )
      );
    } else if (type === 'undo') {
      setTodos(
        todos.map((todo) =>
          todo.id === data ? { ...todo, completed: false } : todo
        )
      );
    } else if (type === 'add') {
      if (input.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: data, completed: false }]);
        setInput('');
      }
    } else {
      setTodos(todos.filter((todo) => todo.id !== data));
    }
  };

  const onTextChange = (value) => {
    setInput(value);
  };

  return (
    <TodoContextProvider.Provider
      value={{
        todos,
        input,
        onTextChange,
        onClickHandle,
      }}
    >
      <TodoContext />
    </TodoContextProvider.Provider>
  );
}
