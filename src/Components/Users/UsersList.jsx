import { useContext } from 'react';
import { UsersContext } from './UsersProvider';

function UsersList(style) {
  const { users, loading, error } = useContext(UsersContext);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div style={style}>
      <h3>Список користувачів</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
