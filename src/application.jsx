import { useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "task1" },
    { description: "task2" },
    { description: "task3" },
  ]);

  const [description, setDescription] = useState("");

  return (
    <>
      <h2>New task</h2>
      <form>
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
