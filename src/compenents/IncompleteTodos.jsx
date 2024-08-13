import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickC, onClickD } = props
  return (
    <>
      <div className='incomplete-area'>
        <p className='title'>未完了ToDo</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => onClickC(index)}>完了</button>
                <button onClick={() => onClickD(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
