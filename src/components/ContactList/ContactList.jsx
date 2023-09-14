import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/contactSelectors.js';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} alignItems="flex-start">
          <ListItemText
            primary={`Name: ${name}`}
            secondary={
              <Typography variant="body2" color="textSecondary">
                Number: {number}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
