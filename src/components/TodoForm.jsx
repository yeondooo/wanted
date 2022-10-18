import React, { useState } from 'react';
import APITodo from '../apis/APITodo';

const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const createTodo = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    try {
      const newTodo = {
        todo: inputValue,
      };
      // remote에(서버) 추가
      const { data } = await APITodo.createTodo(newTodo);
      // local(내 환경)에 추가
      setTodos([...todos, data]);
      // 초기화
      setInputValue('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div>
      <form>
        <div className='flex items-end'>
          <input
            id='todo'
            type='text'
            value={inputValue}
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
