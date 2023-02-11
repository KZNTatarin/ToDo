import React from 'react';

const Taskİtem = (props) => {
    console.log(props)
    return (
        <div className="task">
            <div className="task__content">
                <button
                    onClick={() => props.check(props.task)}
                    className="check-btn circle-btn">✔</button>
                <div style={{textDecoration: !props.task.status ? 'line-through' : '',  opacity: !props.task.status ? 0.3 : '' }}>{props.task.body}</div>
                <button
                    onClick={() => props.remove(props.task)}
                    className="delete-btn circle-btn">
                    X
                </button>
            </div>
            <div className='task__date'>{props.task.date}</div>
        </div>
    );
};

export default Taskİtem;