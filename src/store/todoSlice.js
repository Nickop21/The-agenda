import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  searchtext: "",
  allcompleted:false,
  currentselected: "default",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
    },
    allcompletedfunction: (state, action) => {
      state.allcompleted=action.payload
      state.todos=state.todos.map((todo) => todo && {...todo , completed:action.payload}
    )
    },
    completedfun: (state, action) => {
      const {id,todoCompleted} = action.payload;

      
      state.todos = state.todos.map((todo) =>
        todo.id == id? { ...todo, completed: todoCompleted} : todo 
      );

    },
    search: (state, action) => {
      state.searchtext = action.payload;
    },
    currentselect: (state, action) => {
      state.currentselected = action.payload;
      
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  allcompletedfunction,
  search,
  currentselect,completedfun
} = todoSlice.actions;

export default todoSlice.reducer;
