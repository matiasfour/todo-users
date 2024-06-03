import React from 'react';
import styles from './todoItem.module.css';

export interface TodoItemProps {
  todo: {
    id: number;
    name: string;
    description: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  const { id, name, description, completed } = todo;

  return (
    <div className={`${styles["todo-item"]} ${completed ? styles["completed"] : ''}`}>
      <p className={styles["todo-item-title"]}>Name: {name}</p>
      <p className={styles["todo-item-description"]}>Description: {description}</p>
      <label className={styles["todo-item-checkbox-label"]}>
        <span className={styles["todo-item-checkbox-label-text"]}>Completed:</span>
        <input
          type="checkbox"
          className={styles["todo-item-checkbox"]}
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
      </label>
    </div>
  );
};

export default TodoItem;
