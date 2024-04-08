import { createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  id?: number;
  title: string;
  completed: boolean;
}

const initialState: TodoState = {
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
