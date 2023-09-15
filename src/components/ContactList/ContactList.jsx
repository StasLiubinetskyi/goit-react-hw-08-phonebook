import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/contactSelectors.js';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Contact } from '../Contact/Contact';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: '1px solid lightgray',
}));

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
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
  );
};

 
