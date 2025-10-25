import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // hold typing
  const [submit, setSubmit] = useState([]); //hold submit

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;
    const newTask = { currentTask: task, done: false };
    setSubmit([...submit, newTask]);
    setTask("");
  }
  console.log(submit);

  function removeList(banana) {
    const newArray = submit.filter((ele, index) => index !== banana);
    setSubmit(newArray);
  }

  function handleCheckbox(index) {
    const copy = [...submit]; // cloning array so we dont change the state directly
    copy[index].done = !copy[index].done; // flip the value,
    setSubmit(copy); // update state
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>To Do List</h1>
        <div className="center">
          <input
            type="text"
            value={task}
            name="lists"
            placeholder="Enter your task here !"
            onChange={handleChange}
          />
          <input name="butt" type="submit" />
        </div>

        <ol className="ol">
          {submit.map((ele, index) => (
            <li key={index} className={ele.done ? "done" : ""}>
              <div className="left">
                <input
                  type="checkbox"
                  checked={ele.done}
                  onChange={() => handleCheckbox(index)}
                />
                <span>{ele.currentTask}</span>
              </div>
              <button onClick={() => removeList(index)}>❌</button>
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
}
export default App;
