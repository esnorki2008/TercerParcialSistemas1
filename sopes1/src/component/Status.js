import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  }, []);

  return (
    <div>
      {status ? (
        <div>
          Loggeado
          <button onClick={logout}>Logout</button>
        </div>
      ) : 'Sin Loggearse'}
    </div>
  );
};