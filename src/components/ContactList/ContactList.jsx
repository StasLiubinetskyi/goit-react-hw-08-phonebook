import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/contactSelectors.js';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Contact } from '../Contact/Contact';
import TextField from '@mui/material/TextField';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: '1px solid lightgray',
}));

const FilterContainer = styled('div')({
  marginTop: '20px',
});

const FilterInput = styled(TextField)({
  width: '100%', // Розширення поля фільтра на всю доступну ширину
});

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const [filterText, setFilterText] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterTextChange = event => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <FilterContainer>
        <FilterInput
          label="Filter Contacts"
          variant="outlined"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </FilterContainer>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <StyledListItem key={id} alignItems="flex-start">
            <ListItemText
              primary={`Name: ${name}`}
              secondary={
                <Typography variant="body2" color="textSecondary">
                  Number: {number}
                </Typography>
              }
            />
            <Contact id={id} />
          </StyledListItem>
        ))}
      </List>
    </div>
  );
};
