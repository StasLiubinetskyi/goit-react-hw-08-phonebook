import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/tasks/tasksSelectors';
import { logoutUser } from '../../redux/auth/authActions';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return user ? (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : null;
};

export default UserMenu;
