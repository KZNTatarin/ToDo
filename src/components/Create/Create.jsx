import React from 'react';
import { useState } from 'react';
import MyButton from '../Uİ/button/MyButton';

const Create = () => {
    const [createİnput, setCreateİnput] = useState('');
    return (
        <div className="create">
            <form>
                <input
                    placeholder="Нужно сделать..."
                    type="text"
                    value={createİnput}
                    onChange={event => setCreateİnput(event.target.value)}
                />
                <MyButton type="">Добавить</MyButton>
            </form>

        </div>
    );
};

export default Create;