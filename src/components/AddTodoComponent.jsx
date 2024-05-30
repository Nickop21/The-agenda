import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  allcompletedfunction,
  search,
  currentselect,
} from "../store/todoSlice";

function AddTodoComponent() {
  const [todoData, setTodoData] = useState("");
  const { todos, allcompleted } = useSelector((state) => state.todo);

  const [searchText, setSearchText] = useState("");
  const [allcompletedcheck, setAllCompletedCheck] = useState(allcompleted);

  const dispatch = useDispatch();

  function todoDataAdd() {
    if (todoData != "") {
      dispatch(addTodo(todoData));
      setTodoData("");
    }
  }
  function allcompletdhandler(params) {
    if(todos.length>0) setAllCompletedCheck(params);
  }
  function searchHandler(e) {
    setSearchText(e);
  }

  useEffect(() => {
    dispatch(allcompletedfunction(allcompletedcheck));
  }, [allcompletedcheck]);

  useEffect(() => {
    dispatch(search(searchText));
  }, [searchText]);

  return (
    <div>
      <h1 className="headerText">Personal TODO App</h1>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Add Todo"
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
        ></input>
        <button className="btn-css" onClick={() => todoDataAdd()}>
          ➕
        </button>
      </div>
      {/* second part */}

      <div className="completedSection flex">
        {/* choose */}
        <div className="chooseDiv flex">
          <select onChange={(e) => dispatch(currentselect(e.target.value))}>
            <option value="default">default</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
          {!allcompleted ? (
            <button
              className="btn-completed"
              onClick={() => allcompletdhandler(true)}
            >
              Mark All Completed
            </button>
          ) : (
            <button
              className="btn-uncompleted"
              onClick={() => allcompletdhandler(false)}
            >
              Mark All uncompleted
            </button>
          )}
        </div>
        {/* search */}
        <div className="searchtodo flex">
          <input
            type="text"
            placeholder="Search Todo"
            onChange={(e) => searchHandler(e.target.value)}
          ></input>
          <button className="btn-css flex" onClick={() => searchHandler()}>
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoComponent;
