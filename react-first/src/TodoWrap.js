import React from 'react';

const TodoWrap = (props) => {
return (
    <main className="todo-wrap">
    <h1 className="title">오늘 할 일</h1>
    <section className="todo-input">{props.form}</section>
    <section className="todo-list">{props.children}</section>
    </main>
);
};


export default TodoWrap;