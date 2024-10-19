import { createContext } from 'react';

export const TodoContextProvider = createContext({
  todos: [],
  input: '',
  onTextChange: () => {},
  onClickHandle: () => {},
});
