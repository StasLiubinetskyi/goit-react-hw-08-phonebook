import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/contactSelectors.js';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contact = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contact.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
