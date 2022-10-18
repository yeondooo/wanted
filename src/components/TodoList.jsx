import React from 'react';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import APITodo from '../apis/APITodo';

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = async (id) => {
    try {
      const newTodo = todos.filter((item) => item.id !== id);
      await APITodo.deleteTodo(id);
      setTodos(newTodo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-4">
      {todos &&
        todos.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <div>{item.isCompleted === true ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</div>
                <div className="pl-1">{item.todo}</div>
              </div>
              <div className="flex items-ceneter">
                <HiOutlinePencil />
                <HiOutlineTrash
                  className="mr-4 cursor-pointer"
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
