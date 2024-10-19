import React, { useState } from 'react';
import TodoPropDrill from '../components/todo/TodoPropDrill';

export default function PropsDrillPage() {
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
    setInput(value)
  };

  return (
    <TodoPropDrill
      input={input}
      onClickHandle={onClickHandle}
      todos={todos}
      onTextChange={onTextChange}
    />
  );
}
