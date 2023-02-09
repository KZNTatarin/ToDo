import { logDOM, logRoles } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import MyButton from '../Uİ/button/MyButton';
import Myİnput from '../Uİ/input/Myİnput';


const Create = ({create}) => {
    const [createİnput, setCreateİnput] = useState('');
    let date = new Date()
    let taskDate = (`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`)

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            body: createİnput,
            date: taskDate,
        }
        create(newTask)
        setCreateİnput('')
    }

    return (
        <div className="create">
            <form className='create__form'>
                <Myİnput
                    placeholder="Нужно сделать..."
                    type="text"
                    value={createİnput}
                    onChange={e => setCreateİnput(e.target.value)}
                />
                <MyButton onClick={addNewTask}>Добавить</MyButton>
            </form>
        </div>
    );
};

export default Create;