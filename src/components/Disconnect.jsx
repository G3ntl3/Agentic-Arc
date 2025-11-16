import React from 'react';
import wallet_icon from "../assets/icon/wallet.png";
import { usePrivy } from '@privy-io/react-auth';

const Disconnect = () => {
  const { ready, authenticated, logout, user } = usePrivy();

  if ( !authenticated) return null;

  return (
    <button onClick={logout} className="flex items-center justify-center px-3 py-3 rounded-full bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-medium gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50">
      Disconnect
      <img src={wallet_icon} alt="wallet" className="w-5 h-5" />
    </button>
  );
}

export default Disconnect;
