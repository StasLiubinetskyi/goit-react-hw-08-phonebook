import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactActions';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};
