import React from 'react';

import UserContainer from '../../containers/Users/UserContainer';
import CreateUserContainer from '../../containers/Users/CreateUserContainer';

const Users = ({ users = [] }) => {
  console.log('in users ', users);
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />
      {users.map(userId => (
        <UserContainer userId={userId} key={userId} />
      ))}
    </section>
  );
};

export default Users;
