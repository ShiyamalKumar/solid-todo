import { createSignal, For } from "solid-js";
import styles from "./App.module.css";
import { TodoListItem } from "./TodoListItem";

function App() {
  const [todos, setTodos] = createSignal([
    { text: "Walk the dog", complete: false },
    { text: "Do homework", complete: true },
  ]);
  const [newTaskText, setNewTaskText] = createSignal("");
  const [filter, setFilter] = createSignal("all");

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

  const addTask = () => {
    if (newTaskText().trim() !== "") {
      setTodos([...todos(), { text: newTaskText(), complete: false }]);
      setNewTaskText("");
    }
  };

  return (
    <div>
      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div className={styles.main}>
        <input
          type="text"
          value={newTaskText()}
          onInput={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
          class={styles.newTaskInput}
        />
        <button onClick={addTask} class={styles.addButton}>
          Add Task
        </button>
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
