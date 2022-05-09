import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items, deleteTodo, checkChange}) => {
return (
    <ul>
    {items.map((item) => (
    <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} checkChange={checkChange} />
))}
    </ul>

)

}

export default TodoList