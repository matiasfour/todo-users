import React from 'react';
import styles from './todoList.module.css';
import TodoItem from '../todoItem/TodoItem';

interface Todo {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <div className={styles["todo-list"]}>
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))
      ) : (
        <p className={styles["todo-list-no-todos"]}>No TODOs available.</p>
      )}
    </div>
  );
};

export default TodoList;
