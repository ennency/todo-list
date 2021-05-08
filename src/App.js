import { useState, useEffect } from 'react';
import { FiltersTask } from './FiltersTask';
import { TaskList } from './TaskList';
import { nanoid } from "nanoid";

import styles from './App.module.scss';

export function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTaskList(tasks);
  }

  function addTask(title) {
    const newTask = { id: 'todo-' + nanoid(), title, completed: false };
    setTaskList([
      ...taskList, 
      newTask
    ]);
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function deleteTask(id) {
    const updatedTaskList = taskList.filter(task => id !== task.id);
    setTaskList(updatedTaskList);
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
  }

  function completeTask(id) {
    const updatedTaskList = taskList.map((task) => {
      if(task.id === id) {
        setTaskList([
          ...taskList,
          {...task, completed: !task.completed}
        ]);
        return {...task, completed: !task.completed}
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
    setTaskList(updatedTaskList);
  }

  function deleteCompletedTasks() {
    const completedTasks = taskList.filter(task => task.completed === false);
    setTaskList(completedTasks);
    localStorage.setItem('tasks', JSON.stringify(completedTasks));
  }

  return (
    <div className={styles.app}>
      <h1>Todo</h1>
      <div className={styles.container}>
        <FiltersTask setFilter={setFilter} />
        {taskList && (
          <TaskList 
            taskList={taskList}
            filter={filter}
            addTask={addTask}
            deleteTask={deleteTask}
            deleteCompletedTasks={deleteCompletedTasks}
            completeTask={completeTask}
          />
        )}
      </div>
    </div>
  );
}

