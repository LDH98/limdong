import React, { useState } from 'react';
import TodoWrap from './TodoWrap';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  const [items, setItems] = useState([]);
  const addTodo = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      checked: false
    }
    setItems([...items, newItem])
  }
    const deleteTodo = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const  checkChange = (id) => {
    setItems (
      items.map((item) =>
        id === item.id ? { ...item, checked: !item.checked } : item
      ))
  }

  return(
    <TodoWrap form={(
      <TodoInput addTodo={addTodo}/>
    )}>
      <TodoList items={items} deleteTodo={deleteTodo} checkChange={checkChange}/>
    </TodoWrap>
  )
}

export default App
