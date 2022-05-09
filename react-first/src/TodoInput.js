import React, { useState } from 'react';

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState('');
    const inputChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={value} onChange={inputChange} />
            <button type='submit' className='btn-add'>등록</button>
        </form>

    )

}


export default TodoInput