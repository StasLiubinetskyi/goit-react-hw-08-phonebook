import React from 'react';
import FilterStyled from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterStyled>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </FilterStyled>
  );
};

export default Filter;
