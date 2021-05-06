import "./App.css";
import { useState } from "react";
import Task from "./Task";

function snack() {
  return "ritz crackers";
}

function App(props) {
  const [inputTask, setInputTask] = useState("");
  // [statevalue, function to set state]
  //we need a list of tasks => use array
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask("");
  };
  return (
    <div className="App">
      <header className="App-header">
        New Food:
        <input
          type="text"
          onChange={(event) => {
            setInputTask(event.target.value);
          }}
          value={inputTask}
        />
        <button onClick={addTask}> Submit</button>
        <button> View Single</button>
        {taskList.map((value, index) => {
          return (
            <Task
              key={value}
              name={value}
              index={index}
              taskList={taskList}
              setTaskList={setTaskList}
            ></Task>
          );
        })}
      </header>
    </div>
  );
}

export default App;
