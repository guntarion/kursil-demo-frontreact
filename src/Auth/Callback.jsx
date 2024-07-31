import React, { useEffect } from 'react';
import Loader from '../Layout/Loader';
import { useAuth0 } from '@auth0/auth0-react';

const Callback = () => {

  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth0_profile', JSON.stringify(user));
      localStorage.setItem('authenticated', true);
      window.location.href = `${process.env.PUBLIC_URL}/sample-page`;
    }
  });

  return (
    <div>
      <Loader />
    </div>
  );

};

export default Callback;