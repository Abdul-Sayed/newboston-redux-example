import React from 'react';
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail'
import './App.css';


const App = () => {
  return (
    <div>
      <UserList />
      <UserDetail />
    </div>
  );
}

export default App;


