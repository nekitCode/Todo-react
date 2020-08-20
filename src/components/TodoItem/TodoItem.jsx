import React from 'react';
import TodoList from '../TodoList/TodoList';

import './TodoItem.scss';
import Counter from '../Counter/Counter';

const TodoItem = ({todos}) => {
  return (
    <div>
      <ul>
        {todos.map(item => <TodoList key={item.id} {...item}/>)}
      </ul>
      <Counter todo={todos}/>
    </div>
  )
}

export default TodoItem;