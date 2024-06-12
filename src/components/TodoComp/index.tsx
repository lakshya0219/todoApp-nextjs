'use client';

import { addTask, deleteTask, toggleTask } from '@/redux/taskSlice';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '../Tabs';
import TaskList from '../TaskList';
import { RootState } from '@/redux/store';



const TodoComp: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleAddTask = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'Active') return !task.completed;
    if (activeTab === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className='flex items-center justify-center h-screen bg-red-500'>
    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
      <div className="flex">
        <div className="w-1/4 mt-[80px]  mr-[70px]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-3/4">
          <h1 className="text-xl font-bold mb-[10px]">{activeTab} Tasks</h1>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={handleAddTask}
            placeholder={`Add a new task inside '${activeTab}' category`}
            className="border border-gray-400 p-2 mb-4 w-full"
          />
          <TaskList tasks={filteredTasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default TodoComp;
