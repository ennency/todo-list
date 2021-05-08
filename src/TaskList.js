import Todo from './Task';
import AddTask from './AddTask';
import Button from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import styles from './TaskList.module.scss';

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: task => !task.completed,
  COMPLETED: task => task.completed
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const TaskList = ({ 
  taskList, completeTask, addTask, deleteTask, deleteCompletedTasks, filter 
}) => {
  
  function handleClick() {
    deleteCompletedTasks();
  }

  const classes = useStyles();

  return (
    <>
      {filter !== 'COMPLETED' && <AddTask addTask={addTask} />}
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
      {filter === 'COMPLETED' && (
        <Button
          variant="contained"
          color="secondary"
          className={classes.deleteButton}
          startIcon={<DeleteIcon />}
          onClick={handleClick}
        >
          Delete All
        </Button>
      )}
    </>
  );
}