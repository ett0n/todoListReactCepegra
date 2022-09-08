import "./styles.scss";
import { useState } from "react";
import { TaskForm } from "./components/form";
import { TaskList } from "./components/tasklist";
import { uid } from "uid";

export default function App() {
  //init js
  const [tasks, setTasks] = useState([
    {
      id: uid(),
      done: true,
      task: "Ranger sa chambre",
      owner: "Mathieu"
    },
    {
      id: uid(),
      done: false,
      task: "Faire du react",
      owner: "Olivier"
    }
  ]);

  const switchTask = (ev, i) => {
    const tempTasks = [...tasks];
    tempTasks[i].done = !tempTasks[i].done;
    setTasks(tempTasks);
    console.log(tasks);
  };

  const addTask = (newTask) => {
    newTask.id = uid();
    setTasks([...tasks, newTask]);
  };

  const delTask = (index) => {
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  };

  // const testFun = (tasks) => {
  //   console.log(tasks);
  //   let newTask = tasks.filter((task) => task.done);
  //   console.log(newTask);
  // };

  //TODO ADD SORT BY OWNER
  return (
    <div className="App">
      <h1>Task-list</h1>
      <TaskList data={tasks} switchFn={switchTask} delFn={delTask} />
      <div className="form-container">
        <TaskForm onAdd={addTask} />
      </div>
    </div>
  );
}
