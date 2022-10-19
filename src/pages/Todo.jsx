import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { FcTodoList } from 'react-icons/fc';
import APITodo from '../apis/APITodo';

const Todo = () => {
  const token = localStorage.getItem('authorization');
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const { data } = await APITodo.getTodos();
      setTodos(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const loginCheck = () => {
    if (!token) navigate('/');
    else fetchTodos();
  };

  useEffect(() => {
    loginCheck();
  }, []);

  return (
    <div>
      <div className="text-lg font-bold flex items-center justify-center">
        <FcTodoList className="mx-1" />
        <p>TODO LIST</p>
      </div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className="pt-4">
        {todos &&
          todos.map((item) => {
            return <TodoList key={item.id} todos={todos} setTodos={setTodos} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Todo;
