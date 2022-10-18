import React, { useState } from 'react';
import { HiOutlineTrash, HiOutlinePencil, HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import APITodo from '../apis/APITodo';

const TodoList = ({ todos, setTodos, item }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(item.todo);

  const deleteTodo = async (id) => {
    try {
      const newTodo = todos.filter((item) => item.id !== id);
      await APITodo.deleteTodo(id);
      setTodos(newTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id) => {
    try {
      const editData = {
        todo: inputValue,
        isCompleted: item.isCompleted,
      };
      await APITodo.updateTodo(id, editData);
      setIsEditMode(!isEditMode);
      setTodos(
        todos.map((item) =>
          item.id === id
            ? {
                ...item,
                todo: inputValue,
              }
            : {
                ...item,
              },
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateCheckbox = async (id) => {
    try {
      const editData = {
        todo: item.todo,
        isCompleted: !item.isCompleted,
      };
      await APITodo.updateTodo(id, editData);
      setTodos(
        todos.map((item) =>
          item.id === id
            ? {
                ...item,
                isCompleted: !item.isCompleted,
              }
            : {
                ...item,
              },
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center">
          <div>
            {item.isCompleted === true ? (
              <MdOutlineCheckBox
                className="cursor-pointer"
                onClick={() => {
                  updateCheckbox(item.id);
                }}
              />
            ) : (
              <MdOutlineCheckBoxOutlineBlank
                className="cursor-pointer"
                onClick={() => {
                  updateCheckbox(item.id);
                }}
              />
            )}
          </div>
          {!isEditMode ? (
            <div className={`pl-1 ${item.isCompleted && 'line-through text-gray-500'}`}>{item.todo}</div>
          ) : (
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={editHandler}
                className="mx-1 w-full focus:outline-none"
                autoFocus
                placeholder="수정할 내용을 입력해주세요"
              />
            </div>
          )}
        </div>
        <div className="flex items-ceneter">
          {!isEditMode ? (
            <>
              <HiOutlinePencil
                className="cursor-pointer hover:text-blue-700 "
                onClick={() => {
                  setIsEditMode(!isEditMode);
                }}
              />
              <HiOutlineTrash
                className="mr-4 cursor-pointer hover:text-blue-700 "
                onClick={() => {
                  deleteTodo(item.id);
                }}
              />
            </>
          ) : (
            <div className="flex pr-4 text-sm">
              <HiOutlineCheck
                className="cursor-pointer mr-1 hover:text-blue-700 "
                onClick={() => {
                  updateTodo(item.id);
                }}
              />
              <HiOutlineX
                className="cursor-pointer hover:text-blue-700 "
                onClick={() => {
                  setIsEditMode(!isEditMode);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
