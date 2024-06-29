import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const sortTodos = (todos: TTodo[]) => {
  return [...todos].sort(
    (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
  );
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
      state.todos = sortTodos(state.todos);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = sortTodos(
        state.todos.filter((todo) => todo.id !== action.payload)
      );
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = sortTodos(
        state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      );
    },
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos = sortTodos(
        state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
              }
            : todo
        )
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
