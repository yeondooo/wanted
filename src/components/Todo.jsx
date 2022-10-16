import React from 'react';
import { api } from '../api/api';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';

const Todo = ({ todos }) => {
  return (
    <div className='pt-4'>
      {todos &&
        todos.map((item) => {
          return (
            <div
              key={item.id}
              className='flex items-center justify-between py-1'>
              <div className='flex items-center'>
                <div>
                  {item.isCompleted === true ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank />
                  )}
                </div>
                <div className='pl-1'>{item.todo}</div>
              </div>
              <div className='flex items-ceneter'>
                <HiOutlinePencil />
                <HiOutlineTrash className='mr-4' />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
