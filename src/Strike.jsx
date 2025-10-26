function Strike({ element, index, store, setStore }) {
  function handleCheckbox() {
    const copy = [...store];
    copy[index].done = !copy[index].done;
    setStore(copy);
  }

  function removeList(banana) {
    const newArray = store.filter((ele, index) => index !== banana);
    setStore(newArray);
  }

  return (
      <li key={index} className={element.done ? "done" : ""}>
        <input
          type="checkbox"
          checked={element.done}
          onChange={handleCheckbox}
        />
        {element.currentValue}
        <button onClick={() => removeList(index)}>❌</button>
      </li>
  );
}

export default Strike;
