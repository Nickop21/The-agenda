import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("tododata")) || [],
  searchtext: "",
  allcompleted: JSON.parse(localStorage.getItem("allcomplete")) || false,
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
      localStorage.setItem("tododata", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
      localStorage.setItem("tododata", JSON.stringify(state.todos));
    },
    allcompletedfunction: (state, action) => {
      state.allcompleted = action.payload;
      if (action.payload == true) {
        state.todos = state.todos.map(
          (todo) => todo && { ...todo, completed: action.payload }
        );
      }
      localStorage.setItem("tododata", JSON.stringify(state.todos));
    },
    completedfun: (state, action) => {
      const { id, todoCompleted } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id == id ? { ...todo, completed: todoCompleted } : todo
      );
      localStorage.setItem("tododata", JSON.stringify(state.todos));
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
  currentselect,
  completedfun,
} = todoSlice.actions;

export default todoSlice.reducer;
