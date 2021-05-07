import { useState } from 'react';

import styles from './AddTask.module.scss';

const AddTask = ({ addTask }) => {
  const [detailValue, setDetailValue] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if(detailValue.length > 0) {
      addTask(detailValue);
      setDetailValue('');
    }
  }

  function handleChange(e) {
    setDetailValue(e.target.value);
  }

  return (
    <form className={styles.formContainer} onSubmit={(e) => handleClick(e)}>
      <input 
        type="text" 
        className={styles.inputText}
        value={detailValue} 
        placeholder="Add Details"
        onChange={(e) => handleChange(e)} />
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddTask;