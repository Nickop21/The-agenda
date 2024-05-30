import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {deleteTodo, completedfun } from "../store/todoSlice";
function TODO({ data, id }) {
  const [completedCheck, setCompletedCheck] = useState(false);

  const {todos, allcompleted } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoCompleted, setTodoCompleted] = useState(false);

  useEffect(() => {
    // setTodoCompleted(todos.completed);
      setTodoCompleted(data.completed);


  }, [data]);


  function deleteNote(currentid) {
    dispatch(deleteTodo(currentid));
  }

  function completedTodo(param) {
    if (param == "completed") {
      // setTodoCompleted(true);
      dispatch(completedfun({ id: data.id, todoCompleted: true }));
    } else {
      // setTodoCompleted(false);
      dispatch(completedfun({ id: data.id, todoCompleted: false }));

    }

  }

  return (
    <div className="todomain flex">
      {/* <div className="topbox">
        <div className="completedOrNot">

        </div>
        <div className="todomain-right flex">
        <button onClick={() => deleteNote(data.id)}>🗑️</button>
        {todoCompleted ? (
          <button onClick={() => completedTodo("removecompletd")}>❌</button>
        ) : (
          <button onClick={() => completedTodo("completed")}>✅</button>
        )}
      </div>
      
      </div> */}
      <div className="todomain-left">
        <span className="number">{id + 1}.</span>
        <span className={`${todoCompleted ? "line-through" : ""}`}>
          {data.text}
        </span>
      </div>
      <div className="todomain-right flex">
        <button onClick={() => deleteNote(data.id)}>🗑️</button>
        {todoCompleted ? (
          <button onClick={() => completedTodo("removecompletd")}>❌</button>
        ) : (
          <button onClick={() => completedTodo("completed")}>✅</button>
        )}
      </div>
    </div>
  );
}

export default TODO;
