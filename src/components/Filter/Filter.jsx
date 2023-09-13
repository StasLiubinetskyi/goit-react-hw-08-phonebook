import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/contactSelectors';

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
