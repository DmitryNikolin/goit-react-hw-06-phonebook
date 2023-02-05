import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/slices/contacts';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <input
      className={styles.filter}
      type="text"
      name="filter"
      onChange={changeFilter}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
