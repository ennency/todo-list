import { useState } from 'react';
import FiltersTask from './FiltersTask';
import TaskList from './TaskList';
import { nanoid } from "nanoid";

import styles from './App.module.scss';

export function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState('ALL');

  function addTask(title) {
    const newTask = { id: "todo-" + nanoid(), title, completed: false };
    setTaskList([
      ...taskList, 
      newTask
    ]);
  }

  function deleteTask(id) {
    const updatedTaskList = taskList.filter(task => id !== task.id);
    setTaskList(updatedTaskList);
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
    })
    setTaskList(updatedTaskList);
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
            completeTask={completeTask}
          />
        )}
      </div>
    </div>
  );
}