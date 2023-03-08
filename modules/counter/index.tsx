import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { NextPage } from 'next';

import { getTodo } from 'apis/todo';
import { decrement, increment, selectCount } from 'store/slices/counterSlice';
import { useAppSelector } from 'store/hook';
import styles from '@/styles/Counter.module.scss';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Counter: NextPage = () => {
  const dispatch = useDispatch();
  const count = useAppSelector(selectCount);

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const fetchTodo = useCallback(async () => {
    try {
      const { data } = await getTodo();
      setTodos(data);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Count: {count}</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
          <div className={styles.card}>
            <button onClick={handleIncrement}>Increment</button>
          </div>
        </div>
        <div />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Counter;
