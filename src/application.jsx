import { useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "task1" },
    { description: "task2" },
    { description: "task3" },
  ]);

  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTasks((old) => [...old, { description }]);
  }

  return (
    <>
      <h1>Task aplickation</h1>
      <h2>New task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Task name:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button>Save {description}</button>
        </div>
      </form>
      <h1>My task</h1>
      <ul>
        {tasks.map((t) => (
          <li>
            <input type={"checkbox"} /> {t.description}
          </li>
        ))}
      </ul>
    </>
  );
}
