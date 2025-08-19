import React from 'react'
import wallet_icon from "../assets/icon/empty-wallet.png";
const Connect = () => {
  return (
    <div>
      <button className="connectbtn text-white px-6 py-3 text-xl rounded-[20px] flex gap-2 border border-[connectbtn] ">Connect Wallet <img src={wallet_icon} alt="" /></button>
    </div>
  );
}

export default Connect
