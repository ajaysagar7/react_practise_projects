import React, { useState } from 'react';

const TodoScreen = () => {
  const [todoList, setTodoList] = useState([]); // State for the list of todos
  const [text, setText] = useState(''); // State for the input text

  // Handles input change and updates the text state
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Adds a new todo to the todoList state
  const handleAddTodo = () => {
    if (text.length > 0) {
      const newTodo = {
        title: text,
        createdAt: new Date().toISOString(),
        isDone: false,
        priority: 'low',
      };
      setTodoList([...todoList, newTodo]);
      setText('');
    } else {
      alert('Please enter a todo');
    }
  };

  // Removes a todo from the todoList state based on index
  const handleRemoveTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };
  const handleCheckbox = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }; // Correctly toggles the isDone property without mutating the original todo object
      }
      return todo;
    });
    setTodoList(newTodoList); // Corrected variable name to newTodoList
  };

  return (
    <div className="todocontainer h-full mx-auto max-w-[80%] bg-gray-100 rounded mt-10 py-4 px-2">
      {/* Title container */}
      <h1 className="text-4xl font-bold text-center text-cyan-700 underline underline-offset-2 my-3">Todo App</h1>
      
      {/* Input container for adding new todos */}
      <div className="todoinputcontainer flex justify-center items-center">
        <input
          type="text"
          className="todoinput border-2 border-cyan-700 rounded-md p-2 w-1/2"
          placeholder="Enter your todo here"
          value={text}
          onChange={handleInputChange}
        />
        <button
          className="addtodobutton bg-cyan-700 text-white p-2 rounded-md ml-2"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      
      {/* Container for the list of todos */}
      <div className="todolistcontainer mt-4">
        <ul className="todolist">
          {todoList.map((todo, index) => (
            <li key={index} className="todolistitem my-2 bg-white px-2 py-2 rounded-xl">
              {/* Individual todo item container */}
              <div className="todolistitemcontainer flex justify-between items-center">
                {/* Displaying full details of todo item */}
                <div>
                  <h3 className={`todotext font-bold ${todo.isDone ? 'line-through' : ''}`}>
                    <span>
                      <input type="checkbox" name="check" id={`check-${todo.id}`} checked={todo.isDone} onChange={() => handleCheckbox(todo.id)} />
                    </span>
                    {index + 1 + ". "}{todo.title}
                  </h3>
                  <p className="todoCreatedAt text-sm">Created on: {new Date(todo.createdAt).toLocaleString()}</p>
                  <p className="todoPriority text-sm">Priority: {todo.priority}</p>
                </div>
                <div className="todobuttons flex justify-between items-center">
                  {/* Buttons for marking as done and deleting todos */}
                  <button className="todobutton bg-green-500 text-white p-1 rounded-md mr-2">Edit</button>
                  <button onClick={() => handleRemoveTodo(index)} className="todobutton bg-red-500 text-white p-1 rounded-md">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoScreen;