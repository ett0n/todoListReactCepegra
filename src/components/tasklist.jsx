import { useState } from "react";

export const TaskList = ({ data, switchFn, delFn }) => {
  let [hide, setHide] = useState(false);
  console.log(data);
  let [ownerView, setOwnerView] = useState("All");
  const changeHide = () => {
    setHide(!hide);
  };

  const handleSelectChange = (ev) => {
    setOwnerView(ev.target.value);
  };

  return (
    <div className="tasks-list-container">
      <select
        className="filter-owner-view"
        onChange={handleSelectChange}
        value={ownerView}
      >
        <option value="All">All</option>
        <option value="Mathieu">Mathieu</option>
        <option value="Olivier">Olivier</option>
        <option value="Paul">Paul</option>
      </select>
      <ul className="tasks-ul">
        {data
          .filter((task) =>
            ownerView === "All" ? task.owner : task.owner === ownerView
          )
          .map(({ id, done, task, owner }, index) => (
            <li
              key={id}
              className={hide ? (done ? "task hidden" : "task") : "task"}
            >
              <div className="div-task-container">
                <h2 className="task-desc">{task}</h2>
                <p className="task-owner">{owner}</p>
              </div>
              <div className="task-check-del-container">
                <label className="task-check">
                  <input
                    onChange={(ev) => switchFn(ev, index)}
                    type="checkbox"
                    id={index + owner}
                    name={"task" + index}
                    checked={done}
                  />
                </label>
                <span onClick={() => delFn(index)}>&#215;</span>
              </div>
            </li>
          ))}
      </ul>
      <label className="hide-task">
        <input
          onChange={changeHide}
          type="checkbox"
          id="hideTask"
          name="hideTask"
          checked={hide}
        />
        Hide finished tasks
      </label>
    </div>
  );
};
