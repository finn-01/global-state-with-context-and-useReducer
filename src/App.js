import "./styles.css";
import { useStore, actions } from "./store";
import { useRef } from "react";

export default function App() {
  const [state, dispatch] = useStore();
  const inputRef = useRef();

  const { todos, todoInput } = state;

  console.log("todoInput: ", todoInput);

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setInput(""));
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input
        value={todoInput}
        ref={inputRef}
        placeholder="Enter"
        onChange={(e) => dispatch(actions.setInput(e.target.value))}
      />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
