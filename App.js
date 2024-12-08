import React from 'react';
import UserList from './components/UserList';
import RoleList from './components/RoleList';

const App = () => {
  return (
    <div>
      <h1>Role-Based Access Control (RBAC)</h1>
      <UserList />
      <RoleList />
    </div>
  );
};

export default App;
