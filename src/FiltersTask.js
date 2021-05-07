
import { useState } from 'react';

import styles from './FiltersTask.module.scss';

const FiltersTask = ({ setFilter }) => {
  const [filterActive, setFilterActive] = useState('ALL');

  const buttonAllClasses = `${styles.button} ${filterActive === 'ALL' ? styles.active : ''}`;
  const buttonActiveClasses = `${styles.button} ${filterActive === 'ACTIVE' ? styles.active : ''}`;
  const buttonCompletedClasses = `${styles.button} ${filterActive === 'COMPLETED' ? styles.active : ''}`;
  
  const handleSetFilterClick = (filter, e) => {
    setFilterActive(filter);
    setFilter(filter)
  }
  return (
    <section className={styles.container}>
      <button 
        key={'ALL'}
        className={buttonAllClasses}
        onClick={(e) => handleSetFilterClick('ALL', e)}>All</button>
      <button 
        key={'ACTIVE'}
        className={buttonActiveClasses} 
        onClick={(e) => handleSetFilterClick('ACTIVE', e)}>Active</button>
      <button 
        key={'COMPLETED'}
        className={buttonCompletedClasses}  
        onClick={(e) => handleSetFilterClick('COMPLETED', e)}>Completed</button>
    </section>
  );
}

export default FiltersTask;

