import { useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "task1" },
    { description: "task2" },
    { description: "task3" },
  ]);

  return (
    <>
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
