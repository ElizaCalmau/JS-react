import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUsersSelector, fetchUsers } from '../store/users/UsersSlice';
import { Link, Route, Switch } from 'react-router-dom';
import { UserPage } from './UserPage';


export const Users = () => {

  const dispatch = useDispatch();
  const usersState = useUsersSelector();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {usersState.users.length > 0 &&
          usersState.users.map((user) => (
            <li key={user.id}>
                <Link to={`/${user.id}`}>{user.bank.cardNumber}</Link>
            </li>
          ))}
      </ul>
      <Switch>
        <Route path={`/:id`}>
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};