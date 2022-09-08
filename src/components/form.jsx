import { useState } from "react";
export const TaskForm = ({ onAdd }) => {
  // Inistalisation + states
  const [taskinput, settaskinput] = useState({
    task: "",
    done: false,
    owner: "Mathieu"
  });

  // Réaction
  const handleClick = (ev) => {
    ev.preventDefault();
    if (taskinput.task === "") return;
    onAdd({ ...taskinput });

    settaskinput({ task: "", done: "", owner: "Mathieu" });
  };

  const handleTaskChange = (ev) => {
    settaskinput({ ...taskinput, task: ev.target.value });
  };

  const handleOwnerChange = (ev) => {
    settaskinput({ ...taskinput, owner: ev.target.value });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Task..."
        onChange={handleTaskChange}
        value={taskinput.task}
      />
      <select onChange={handleOwnerChange} value={taskinput.owner}>
        <option value="Mathieu">Mathieu</option>
        <option value="Olivier">Olivier</option>
        <option value="Paul">Paul</option>
      </select>
      <button onClick={handleClick} disabled={taskinput.task === ""}>
        + Add a task
      </button>
    </form>
  );
};
