import { useEffect, useState } from "react";
import "./App.css";
import TODO from "./components/TODO";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todoSlice";
import AddTodoComponent from "./components/AddTodoComponent";
import Progressbar from "./components/progressBar/Progressbar";

function App() {
  const { todos, searchtext,currentselected} = useSelector((state) => state.todo);
  const [searchdata, setSearchData] = useState(todos);

  useEffect(() => {
    const filtered = todos.filter((item) =>
      item.text.toLowerCase().includes(searchtext)
    );
    if (searchtext == "" || searchtext==null) {
      setSearchData(todos);
    } else {
      setSearchData(filtered);
    }
  }, [searchtext,todos]);

  useEffect(() => {
    const filteredTodos = todos.filter((data) => {
      if (currentselected === "completed") {
        return data.completed === true;
      } else if (currentselected === "uncompleted") {
        return data.completed === false;
      } else {
        return true; // Include all todos
      }
    });
  
    setSearchData(filteredTodos);
  }, [currentselected, todos]);

  return (<>
    <h1 className="headerText">Agenda for today</h1>
    <div style={{width:"100%",}}>
    <Progressbar/>

    </div>
    <div className="container">
      
      <div className="todoContainer">
        <AddTodoComponent />
        {/* all notes section */}

        <h6 style={{color:"white"}}>All Your Notes Here...</h6>
        <div className="todo-main-conatiner flex"> 

        {searchdata?.map(
          (datatodo, index) =>
            datatodo.text != "" && <TODO data={datatodo} id={index} />
        )}
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
