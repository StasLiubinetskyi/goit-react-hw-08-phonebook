import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authActions';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(login())}>
        Logout
      </button>
    </div>
  );
};
