import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '../api/api';
import Todo from '../components/Todo';

const TodoList = () => {
  const [todos, setTodos] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('authorization');

  const fetchData = async () => {
    try {
      const response = await todoApi.get('/todos');
      setTodos(response);
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
      <div className='text-lg font-bold text-center'>TODO LIST</div>
      <Todo />
    </div>
  );
};

export default TodoList;
