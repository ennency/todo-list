import Todo from './Task';
import AddTask from './AddTask';
import styles from './TaskList.module.scss';

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: task => !task.completed,
  COMPLETED: task => task.completed
};

export const TaskList = ({ taskList, completeTask, addTask, deleteTask, filter }) => {
  return (
    <>
      <AddTask addTask={addTask} />
      <ul className={styles.container}>
        {
          taskList.filter(FILTER_MAP[filter]).map((task) => {
            const { title, id, completed } = task;
            return (
              <Todo 
                title={title} 
                id={id} 
                key={id}
                completeTask={completeTask}
                deleteTask={deleteTask}
                completed={completed}
                />
              )
          })
        }
      </ul>
    </>
  );
}

export default TaskList;