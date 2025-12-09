import React from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Connect from './Connect';

const RequireAuth = ({ children, fallbackMessage }) => {
  const { authenticated, login, ready, user } = usePrivy();

  if (!ready) return null;

  if (!authenticated) {
    return (
      <div className="w-full    max-w-3xl  px-3 py-3 mx-auto rounded-xl lg:w-90 lg:px-10 my-30  lg:my-30 " style={{background: 'linear-gradient(90deg, #001b18 0%, #03211a 100%)', border: '1px solid rgba(61,220,151,0.06)'}}>
        <h3 className="text-white text-xl mb-2">User not signed in</h3>
        <p className="text-gray-300 mb-4">{fallbackMessage || 'You need to connect your wallet to proceed.'}</p>
        <div className="flex items-center gap-3">
          <Connect />
         </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RequireAuth;
