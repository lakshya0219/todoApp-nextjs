'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import store, { RootState } from '../redux/store';
import { addTask, deleteTask, toggleTask } from '../redux/taskSlice';
import TaskList from '../components/TaskList';
import Tabs from '../components/Tabs';
import TodoComp from '@/components/TodoComp';

export default function Home () {
  return (
    <Provider store={store}>
     <TodoComp />
    </Provider>
  )
}
