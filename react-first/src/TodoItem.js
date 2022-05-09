import React from 'react';
const TodoItem = ({item, deleteTodo, checkChange}) => {

const {id, text, checked} = item

return (
    <li key={id} className='todo-item'>
    <input id={id} type='checkbox' checked={checked} onChange={() => checkChange(id)} />
    <label htmlFor={id}>{text}{checked}</label>
    <input type='button' value='X' className='btn-delete' onClick={() => deleteTodo(id)} />
    </li>

)

}

export default TodoItem