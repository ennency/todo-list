import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'; 
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import styles from './Task.module.scss';

const Task = ({ title, id, completed, deleteTask, completeTask }) => {

  function handleCompleteTaskChange() {
    completeTask(id);
  };

  function handleDeleteTaskClick() {
    deleteTask(id);
  }

  const completedLabelClasses = completed ? styles.isCompleted : '';

  return (
    <li className={styles.task}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleCompleteTaskChange}
            checked={completed}
            name="checked"
            color="primary"
          />
        }
        classes={{
          label: completedLabelClasses
        }}
        label={title}
      />
      <IconButton aria-label="delete" onClick={handleDeleteTaskClick}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </li>
  );
}

export default Task;