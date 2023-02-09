import React from 'react';
import Taskİtem from '../Taskİtem/Taskİtem';

const TaskList = ({tasks, remove, check}) => {
    return (
        <div>
            {tasks.map(task =>
                <Taskİtem check={check} remove={remove} task={task} key={tasks.id}/>
            )}
        </div>
    );
};

export default TaskList;