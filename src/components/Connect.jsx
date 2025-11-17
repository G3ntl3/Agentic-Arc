import React from 'react';
import wallet_icon from "../assets/icon/wallet.png";
import { usePrivy } from '@privy-io/react-auth';

const Connect = () => {
  const { ready, authenticated, login, user } = usePrivy();

  const shortenAddress = (addr) => addr.slice(0, 6) + "..." + addr.slice(-4);

  if (authenticated) {
    const wallet_address = user?.wallet?.address.trim();
    return (
      <div className='text-sm font-bold p-2 rounded-2xl  bg-white/10 text-green-400  transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50'>
         {shortenAddress(wallet_address)}
      </div>
    )
  }

  return (
    <button 
      onClick={login} 
      className="flex items-center justify-center px-3 py-2 rounded-2xl bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-medium gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50"
    >
      Connect
      <img src={wallet_icon} alt="wallet" className="w-5 h-5" />
    </button>
  );
}

export default Connect;
