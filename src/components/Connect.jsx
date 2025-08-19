import React from 'react'
import wallet_icon from "../assets/icon/wallet.png";
const Connect = () => {
  return (
    <div className="">

    <button className="flex items-center justify-center hover:w-[110%] w-[100%] px-2 py-3 rounded-full bg-gradient-to-r from-[#0CDDF4] to-[#016179] text-white font-medium gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50">
      Connect Wallet
      <img src={wallet_icon} alt="wallet" className="w-5 h-5" />
    </button>
    </div>
  );
}

export default Connect
