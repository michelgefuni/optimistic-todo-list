import React, { useState } from 'react';

function TodoList({ children, isLoading, onAddTodo}) {
  const [todo, setTodo] = useState('')

  const handleChange = evt => {
    setTodo(evt.target.value);
  };

  const handleAddClick = () => {
    setTodo('');
    onAddTodo(todo);
  };

  return (
    <div className='todolist'>
      <div>
        <input
          type='text'
          placeholder='enter a todo'
          value={todo}
          onChange={handleChange}
        />
        <button disabled={isLoading} onClick={handleAddClick}>
          {isLoading ? 'Saving...' : 'Add'}
        </button>
      </div>
      <ul>{children}</ul>
    </div>
  );
}

export default TodoList;
