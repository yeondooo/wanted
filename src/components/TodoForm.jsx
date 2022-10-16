import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState({ todo: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { todo } = inputValue;

  const createTodo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://pre-onboarding-selection-task.shop/todos`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authorization')}`,
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
        {
          todo,
        }
      );
      setTodos(data);
    } catch (error) {
      alert(error.response.data.reason);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div>
      <form>
        <div className='flex items-end'>
          <input
            id='todo'
            type='text'
            className='py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600'
            onChange={handleInput}
          />
          <button
            className='text-blue-700 font-bold w-1/4'
            onClick={createTodo}>
            추가
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
