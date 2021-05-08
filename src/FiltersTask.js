
import { useState } from 'react';

import styles from './FiltersTask.module.scss';

export const FiltersTask = ({ setFilter }) => {
  const [filterActive, setFilterActive] = useState('ALL');

  const buttonAllClasses = `${styles.button} ${filterActive === 'ALL' ? styles.active : ''}`;
  const buttonActiveClasses = `${styles.button} ${filterActive === 'ACTIVE' ? styles.active : ''}`;
  const buttonCompletedClasses = `${styles.button} ${filterActive === 'COMPLETED' ? styles.active : ''}`;
  
  const handleSetFilterClick = (filter) => {
    setFilterActive(filter);
    setFilter(filter)
  }
  return (
    <section className={styles.container}>
      <button 
        key={'ALL'}
        className={buttonAllClasses}
        onClick={() => handleSetFilterClick('ALL')}>All</button>
      <button 
        key={'ACTIVE'}
        className={buttonActiveClasses} 
        onClick={() => handleSetFilterClick('ACTIVE')}>Active</button>
      <button 
        key={'COMPLETED'}
        className={buttonCompletedClasses}  
        onClick={() => handleSetFilterClick('COMPLETED')}>Completed</button>
    </section>
  );
}

