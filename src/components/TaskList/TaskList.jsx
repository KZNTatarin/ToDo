import React, { useState } from 'react';
import Taskİtem from '../Taskİtem/Taskİtem';
import MyButton from '../Uİ/button/MyButton';

const TaskList = ({ tasks, remove, check }) => {

    const [filterActive, setFilterActive] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [stateFilter, setStateFiler] = useState('all');

    const handlFilter = (type) => {
        switch (type) {
            case 'completed':
                const completeTasks = tasks.filter((task) => task.status === false)
                setFilteredTasks(completeTasks);
                setFilterActive(true);
                setStateFiler('completed');
                break;

            case 'uncompleted':
                const uncompleteTasks = tasks.filter((task) => task.status === true)
                setFilteredTasks(uncompleteTasks);
                setFilterActive(true);
                setStateFiler('uncompleted');
                break;

            case 'all':
                setFilteredTasks([]);
                setFilterActive(false);
                setStateFiler('all');

            default:
                return tasks;
        }
    }

    console.log(stateFilter)

    return (
        <div>
            <div>
                <MyButton className={`.myBtn ${stateFilter === 'completed' ? 'myBtn__active' : ''}`} onClick={() => handlFilter('completed')}>Выполненные</MyButton>
                <MyButton className={ stateFilter === 'uncompleted' ? 'myBtn myBtn__active' : 'myBtn'} onClick={() => handlFilter('uncompleted')}>Не выполненные</MyButton>
                <MyButton className={ stateFilter === 'all' ? 'myBtn myBtn__active' : 'myBtn'} onClick={() => handlFilter('all')}>Все</MyButton>
            </div>
            <div>
                {filterActive
                    ? filteredTasks.map((task) => (
                        <Taskİtem
                            check={check}
                            remove={remove}
                            task={task}
                            key={tasks.id}
                        />
                    ))
                    : tasks.map((task) => (
                        <Taskİtem
                            check={check}
                            remove={remove}
                            task={task}
                            key={tasks.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TaskList;