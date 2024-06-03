import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from 'todoList/TodoList';
import AddTodo from 'addTodo/AddTodo';
import './index.css';

interface ITodo {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(storedTodos);
    }, []);

    const addTodo = (name: string, description: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            name,
            description,
            completed: false,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const toggleComplete = (id: number) => {
        const updatedTodos = todos.map((todo: ITodo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <div className="container">
            <h1 className="title">Todo App</h1>
            <div className="content">
                <div className='todos-wrapper'>
                    <TodoList todos={todos} toggleComplete={toggleComplete} />
                </div>
                <div className='form-wrapper'>
                    <AddTodo addTodo={addTodo} />
                </div>
            </div>
        </div>
    );
};

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

