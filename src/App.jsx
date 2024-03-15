import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal, For } from "solid-js";
import { TodoListItem } from "./TodoListItem";

function App() {
  const [todos, setTodos] = createSignal([
    { text: "Walk the dog", complete: false },
    { text: "Do homework", complete: true },
  ]);
  const [filter, setFilter] = createSignal("all"); // New signal for the current filter

  const filteredTodos = () => {
    switch (filter()) {
      case "active":
        return todos().filter((todo) => !todo.complete);
      case "completed":
        return todos().filter((todo) => todo.complete);
      default:
        return todos();
    }
  };

  return (
    <div className="main">
      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul>
        <For each={filteredTodos()}>
          {(todo) => <TodoListItem todo={todo} setTodos={setTodos} />}
        </For>
      </ul>
    </div>
  );
}

export default App;
