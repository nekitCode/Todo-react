import React, {useState, useEffect} from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import {Context} from './context';

import './App.scss';

const App = () => {

  const [todo,setTodo] = useState([]);
  const [todoItem,setTodoItem] = useState('');

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      setTodo([
        ...todo, {
          id: Date.now(),
          title: todoItem,
          completed: false
        }
      ]);
      setTodoItem('');
    }
  };

  useEffect(() => {
    const raw = localStorage.getItem('todos');
    setTodo(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo])

 
  const removeTodo = (id) => {
    setTodo(todo.filter(todo => {
      return todo.id !== id;
    }))
  };

  const toggleTodo = (id) => {
    setTodo(todo.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }))
  };

  return (
    <Context.Provider value={{
      toggleTodo,removeTodo
    }}>
      <div className="App">
        <h1 className='headingH1'>todos</h1>
        <div className='container'>
          <input
            value={todoItem}
            onKeyPress={addTodo}
            onChange={(e) => setTodoItem(e.target.value)}
            type='text'
            placeholder='what needs to be done?'
            className='input'/>
          <TodoItem todos={todo} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
