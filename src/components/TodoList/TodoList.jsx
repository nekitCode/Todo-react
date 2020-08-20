import React, {useContext} from 'react'
import {Context} from '../../context';

import trashImg from '..//..//img/trash.svg';
import './TodoList.scss';

const TodoList = ({title, completed,id}) => {

  const {toggleTodo,removeTodo} = useContext(Context);
  
  const addClass = ['todo'];
  
  if (completed) {
    addClass.push('completed');
  }

  return (
    <div className='wrapper'>

      <input
        className='wrapper__checkbox-input'
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}/>
      <div className={addClass.join(' ')}>
        <ul className='wrapper__output'>{title}</ul>
      </div>
      <img 
        src={trashImg} 
        alt="trash" 
        className='wrapper__trash'
        onClick = {() => removeTodo(id)}
    />
    </div>
  )
}

export default TodoList;


