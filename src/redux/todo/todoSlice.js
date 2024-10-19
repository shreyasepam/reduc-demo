const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, products: action.payload };
    case 'DELETE_TODO':
      return state.filter((product) => product.id !== action.payload);
    case 'UNDO_PRODUCT':
      return [...state, action.payload];
    case 'COMPLETE_PRODUCT':
      return [...state, action.payload];
    default:
      return state;
  }
};
