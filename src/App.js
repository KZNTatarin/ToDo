import React, { useState } from "react";
import Create from "./components/Create/Create";
import TaskList from "./components/TaskList/TaskList";
import Taskİtem from "./components/Taskİtem/Taskİtem";
import './styles/app.css';

function App() {

    const [tasks, setTasks] = useState([
    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

    const checkTask = (task) => {
        const newArray = tasks.map((todo) =>
          todo.id === task.id ? { ...todo, status: !task.status } : todo
        );
        setTasks(newArray);
      };

    console.log(tasks)

    return (
        <div className="App">
            <Create remove create={createTask} />
            <h1>ToDo</h1>
            <TaskList check={checkTask} remove={removeTask} tasks={tasks} />
        </div>
    );
}

export default App;
