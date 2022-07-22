import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "@@todos",
  initialState: [],
  reducers: {
    mockedTodos: (state, action) => {
      const initTodos = action.payload;
      return (state = initTodos);
    },
    reorderTodos: (state, action) => {
      const reorderTodoList = action.payload;
      return (state = reorderTodoList);
    },
    setTodo: (state, action) => {
      const itemTextValue = action.payload;
      const newTodo = { id: nanoid(), value: itemTextValue, complete: false };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      return (state = state.filter((todo) => todo.id !== todoId));
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const currentTodo = state.find((todo) => todo.id === todoId);
      currentTodo.complete = !currentTodo.complete;
    },
    clearComplete: (state) =>
      (state = state.map((todo) => ({ ...todo, complete: false }))),
    clearTodos: () => [],
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  mockedTodos,
  reorderTodos,
  setTodo,
  removeTodo,
  toggleTodo,
  clearComplete,
  clearTodos,
} = todosSlice.actions;

export const selectAllTodos = (state) => state.todos;
export const selectTodosQty = (state) => state.todos.length;

export const selectVisibleTodos = (state, type = "all") => {
  return state.todos.filter((item) => {
    if (type === "active") return item.complete === false;
    if (type === "completed") return item.complete === true;
    return true;
  });
};
