import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '../api/api';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { FcTodoList } from 'react-icons/fc';

const TodoList = () => {
  const [todos, setTodos] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('authorization');

  const fetchData = async () => {
    try {
      const { data } = await todoApi.get('/todos');
      setTodos(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const loginCheck = () => {
    if (!token) {
      navigate('/');
    }
  };

  useEffect(() => {
    loginCheck();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='text-lg font-bold flex items-center justify-center'>
        <FcTodoList className='mx-1' />
        <p>TODO LIST</p>
      </div>
      <TodoForm setTodos={setTodos} />
      <Todo todos={todos} />
    </div>
  );
};

export default TodoList;
