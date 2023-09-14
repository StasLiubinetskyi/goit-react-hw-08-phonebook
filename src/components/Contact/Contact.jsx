import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactActions';
import css from './Contact.module.css';

export const Contact = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
