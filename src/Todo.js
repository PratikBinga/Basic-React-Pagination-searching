import react, { useState } from "react";

const Todo = () => {
  const [toDos, setTodos] = useState([]);
  const [todo, setToDo] = useState("");
  const handleChange = (todo) => {
    setToDo(todo);
    console.log(todo, "todo handler");
  };
  console.log(toDos, "todo");
  console.log(todo, "todo");

  const handeSubmit = (e) => {
    e.preventDefault();
    console.log(todo, "event");
    setTodos([...toDos, todo]);
    setToDo("");
  };
  return (
    <form onSubmit={handeSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => handleChange(e.target.value)}
        // onSubmit={(e) => handleChange(e.target.value)}
      />
      <button type="submit"> Add</button>
      {toDos?.length > 0
        ? toDos.map((item, idx) => <li key={idx}>{item}</li>)
        : null}
    </form>
  );
};

export default Todo;
