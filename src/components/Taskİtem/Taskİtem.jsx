import React from 'react';

const Taskİtem = (props) => {
  
    return (
        <div className="task">
            <div className="task__content">
                <button
                    className="check-btn circle-btn" type="">✔</button>
                <div>{props.task.body}</div>
                <button
                    onClick={() => props.remove(props.task)}
                    className="delete-btn circle-btn"
                    >
                        X</button>
            </div>
            <div className='task__date'>{props.task.date}</div>
        </div>
    );
};

export default Taskİtem;