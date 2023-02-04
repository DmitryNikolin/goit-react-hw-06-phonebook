import React from 'react';
import styles from './NoContactsMessage.module.css';

const NoContactsMessage = () => {
  return (
    <div className={styles.sadMessage}>
      <p>Sorry! Contact list is empty...</p>
    </div>
  );
}

export default NoContactsMessage;
