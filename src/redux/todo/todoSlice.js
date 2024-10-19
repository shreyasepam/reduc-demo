const initialState = {
  data: [],
  input: '',
};

export const TODO_CONST = {
  add: 'ADD_TODO',
  undo: 'UNDO_PRODUCT',
  complete: 'COMPLETE_PRODUCT',
  delete: 'DELETE_TODO',
  input: 'TODO_INPUT',
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_CONST.input:
      return {
        ...state,
        input: action.payload,
      };
    case TODO_CONST.add:
      return {
        ...state,
        data: [
          ...state.data,
          { id: Date.now(), text: action.payload, completed: false },
        ],
        input: '',
      };
      return;
    case TODO_CONST.complete:
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    case TODO_CONST.undo:
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: false } : todo
        ),
      };
    case TODO_CONST.delete:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
