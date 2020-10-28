import React from 'react';
import { Account } from './component/Accounts';
import Signup from './component/Signup';
import Login from './component/Login';
import Status from './component/Status';

export default () => {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
};