import { useState } from "react";

const TaskManager = ({ username }) => {
  const [taskInput, setTaskInput] = useState("");
  const [newTasks, setNewTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim()) {
      setNewTasks([...newTasks, taskInput]);
      setTaskInput("");
    }
  };

  const moveToInProgress = (task) => {
    setNewTasks(newTasks.filter((t) => t !== task));
    setInProgressTasks([...inProgressTasks, task]);
  };

  const moveToCompleted = (task) => {
    setInProgressTasks(inProgressTasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <input
        type="text"
        placeholder="Add a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h3>New Tasks</h3>
      <ul>
        {newTasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => moveToInProgress(task)}>→ In Progress</button>
          </li>
        ))}
      </ul>

      <h3>In Progress</h3>
      <ul>
        {inProgressTasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => moveToCompleted(task)}>✔ Complete</button>
          </li>
        ))}
      </ul>

      <h3>Completed</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
