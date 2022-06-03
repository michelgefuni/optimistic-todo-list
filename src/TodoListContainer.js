import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import saveRequest from './saveRequest';

function TodoListContainer() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = name => {
    setTodos(prevState => ([...prevState, { id: -(prevState.length + 1), name }]));

    saveRequest(name)
      .then(receivedTodo => {
        setTodos(prevState => (prevState.map(todo => {
          if (todo.name === receivedTodo.name) {
            return receivedTodo;
          }
          return todo;
        })));
      })
      .catch(() => {
        setTodos(prevState => (prevState.filter(todo => todo.name !== name)));
      });
  };

  return (
    <TodoList onAddTodo={handleAddTodo}>
      {console.log('todos', todos)}
      {!!todos && todos.map(todo => (
        <TodoListItem key={todo.id} optimistic={todo.id < 0}>
          {todo.name}
        </TodoListItem>
      ))}
    </TodoList>
  );
}

export default TodoListContainer;
