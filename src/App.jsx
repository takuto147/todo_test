import React, { useState } from 'react';
import "./style.css"
import { InputTodo } from './compenents/inputTodo';
import { IncompleteTodos } from './compenents/IncompleteTodos';
import { CompleteTodo } from './compenents/completeTodo';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const [todoText, setTodoText] = useState("")

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value)
  }
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("")
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);　//***.splice(A,B)  A番目の要素からB個の要素を削除するメソッド
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }
  const isMaxLimitedcompleteTodos = incompleteTodos.length >= 5


  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={isMaxLimitedcompleteTodos} />
      {isMaxLimitedcompleteTodos && (
        <p>タスクが５個溜まってます！消化してください！</p>
      )}
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickC={onClickComplete} onClickD={onClickDelete} />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};