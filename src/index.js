import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoListContainer from './TodoListContainer';
import './styles.css';

function App() {
  return (
    <div className='App'>
      <h1>Optimistic Todo list</h1>
      <TodoListContainer />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
