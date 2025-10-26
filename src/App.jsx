import React, { useState } from "react";
import Strike from "./Strike.jsx";

function App() {
  const [item, setItem] = useState("");
  const [store, setStore] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleSubmit() {
    if (item == "") return;
    const checkbox = { currentValue: item, done: false };
    setStore((s) => [...s, checkbox]); //or setStore([...store, item])
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {store.map((ele, i) => (
            <Strike
              key={i}
              index={i}
              element={ele}
              store={store}
              setStore={setStore}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
