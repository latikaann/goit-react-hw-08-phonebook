import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder=" Find contacts by name..."
      />
    </label>
  );
};

export default Filter;
