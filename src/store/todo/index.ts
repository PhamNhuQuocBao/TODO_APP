import { Todo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Todo = {
  id: 0,
  title: "",
  completed: false,
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodo: (state, action) => {},
    addTodo: (state, action) => {},
    editTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, editTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
