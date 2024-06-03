import React, { useState } from 'react';
import styles from './addTodo.module.css';

interface TodoFormProps {
  addTodo: (name: string, description: string) => void;
}

const AddTodo: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      addTodo(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <h2 className={styles["form-title"]}>Add a new TODO</h2>
      <div className={styles["form-group"]}>
        <label className={styles["form-label"]} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles["form-input"]}
          placeholder="Enter the task name"
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <label className={styles["form-label"]} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles["form-textarea"]}
          placeholder="Enter the task description"
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <button
          type="submit"
          className={styles["form-button"]}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
