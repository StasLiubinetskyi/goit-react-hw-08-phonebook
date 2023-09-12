import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/tasks/contactsSlice';
import { selectFilter } from '../../redux/tasks/tasksSelectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
