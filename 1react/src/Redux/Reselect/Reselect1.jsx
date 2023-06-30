// The Reselect library is a powerful tool that helps optimize the performance of 
// selectors in a Redux application. Selectors are functions that compute derived 
// data from the Redux store state, such as filtering, sorting, or transforming data. 
// Reselect allows you to create memoized selectors, which cache the results of 
// computations and only recompute them when the input state changes.

// npm install reselect

import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const getUsers = (state) => state.users;

const getFilteredUsers = createSelector(
  getUsers,
  (users) => users.filter((user) => user.age > 18)
);

const UserList = () => {
  const filteredUsers = useSelector(getFilteredUsers);

  return (
    <div>
      <h2>Filtered Users:</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
