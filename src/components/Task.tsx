import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void; 
}

const Task: React.FC<TaskProps> = ({ id, name, completed, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className= "mr-2 peer h-4 w-4 appearance-none border-2 border-gray-300  checked:bg-gray-500 checked:border-gray-300"
        />
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`peer-checked:block hidden w-4 h-4 text-white absolute pointer-events-none`}
      >
        <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`flex-1 ${completed ? 'line-through text-gray-500' : ''}`}>{name}</span>
        {/* <span className={completed ? 'line-through' : ''}>{name}</span> */}
      </div>
      <button onClick={() => onDelete(id)} className="text-red-600"><FaRegTrashAlt /></button>
    </div>
  );
};

export default Task;
