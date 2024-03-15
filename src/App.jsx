import logo from "./logo.svg";
import styles from "./App.module.css";

import { For, createSignal } from "solid-js";
import { TodoListItem } from "./TodoListItem";

function App() {
  const [todos, setTodos] = createSignal([
    { text: "Walk the dosg", complete: false },
    { text: "Do homework", complete: true },
  ]);

  return (
    <ul>
      <For each={todos()}>{(todo) => <TodoListItem todo={todo} />}</For>
    </ul>
  );
}

export default App;
