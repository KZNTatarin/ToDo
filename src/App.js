import React, { useState } from "react";
import Create from "./components/Create/Create";
import TaskList from "./components/TaskList/TaskList";
import Taskİtem from "./components/Taskİtem/Taskİtem";
import './styles/app.css';

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, body: 'Тестовый текст для task',  },
        { id: 2, body: 'Тестовый текст для task 2',  },
        { id: 3, body: 'Тестовый текст для task 3', },
    ])

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter (p => p.id !== task.id))
    }

    return (
        <div className="App">
            <Create remove create={createTask}/>
            <h1>ToDo</h1>
            <TaskList remove={removeTask} tasks={tasks}/>
        </div>
    );
}

export default App;
