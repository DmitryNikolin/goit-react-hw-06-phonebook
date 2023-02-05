import React from 'react';
import styles from './NoContactsMessage.module.css';

const NoContactsMessage = () => {
  return (
    <div className={styles.sadMessage}>
      <p>
        Sorry! Phonebook is empty...
      </p>
    </div>
  );
}

export default NoContactsMessage;
