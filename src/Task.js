import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'; 
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import styles from './Task.module.scss';


export const Task = ({ title, id, completed, deleteTask, completeTask }) => {

  function handleCompletedChange() {
    completeTask(id);
  };

  function handleDeleteClick() {
    deleteTask(id);
  }

  const completedClass = completed ? styles.isCompleted : '';

  return (
    <li className={styles.task}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleCompletedChange}
            checked={completed}
            name="checked"
            color="primary"
          />
        }
        classes={{
          label: completedClass
        }}
        label={title}
      />
      <IconButton aria-label="delete" onClick={handleDeleteClick}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </li>
  );
}

export default Task;