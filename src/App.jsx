import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', status: 'todo' },
    { id: 2, text: 'Write Todo App', status: 'inprogress' },
    { id: 3, text: 'Master React Hooks', status: 'completed' }
  ]);

  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('todo');

  const handleInputChange = (e) => { 
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: inputText,
      status: status
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodoStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    return todos.filter(todo => todo.status === status);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add Todo..."
        />
        <select value={status} onChange={handleStatusChange}>
          <option value="todo">Todo</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <div className="todo-container">
        <div className="todo-column">
          <h2>Todo</h2>
          <ul>
            {filterTodos('todo').map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <select value={todo.status} onChange={(e) => updateTodoStatus(todo.id, e.target.value)}>
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-column">
          <h2>In Progress</h2>
          <ul>
            {filterTodos('inprogress').map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <select value={todo.status} onChange={(e) => updateTodoStatus(todo.id, e.target.value)}>
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-column">
          <h2>Completed</h2>
          <ul>
            {filterTodos('completed').map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <select value={todo.status} onChange={(e) => updateTodoStatus(todo.id, e.target.value)}>
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
