import React from 'react';
import Taskİtem from '../Taskİtem/Taskİtem';

const TaskList = ({tasks, remove}) => {
    return (
        <div>
            {tasks.map(task =>
                <Taskİtem remove={remove} task={task} key={tasks.id}/>
            )}
        </div>
    );
};

export default TaskList;