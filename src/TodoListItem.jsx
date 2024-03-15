export function TodoListItem(props) {
  return (
    <li
      style={{
        "text-decoration": props.todo.complete ? "line-through" : undefined,
      }}
    >
      <label>
        <input
          type="checkbox"
          checked={props.todo.complete}
          onChange={() => {
            props.setTodos((todos) => {
              const newTodos = todos.map((todo) =>
                props.todo === todo
                  ? { ...todo, complete: !todo.complete }
                  : todo
              );
              return newTodos;
            });
          }}
        />
        {props.todo.text}
      </label>
    </li>
  );
}
