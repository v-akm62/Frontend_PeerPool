import React, { useContext, useState } from "react";
import { TransactionContextUser } from "../context/TransactionContextUser";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "../utils/shortenAddress";
import Loader from "./Loader";

const ParkingLot = ({ plData }) => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContextUser);
  // const [isLoading,setIsLoading] =useState(false);
  const handleClick = () => {
    sendTransaction(plData);
  }

  return (<div className="flex gap-10">
    {!currentAccount && (
      <div>
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            Connect Wallet
          </p>
        </button>
        {isLoading && <Loader />}
      </div>
    )}
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
        </div>
        <div>
          <p className="text-white font-light text-sm">
            {shortenAddress(currentAccount)}
          </p>
          <p className="text-white font-semibold text-lg mt-1">
            Ethereum
          </p>
        </div>
      </div>
    </div>
    {plData && (
      <div className="p-6 border border-gray-200 rounded-lg shadow bg-gray-800 text-white border-gray-700" style={{ width: '600px' }}>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-300">{plData.Name}</h5>
        </a>
        <div className="flex ">
          <div >
            <h4>Available Slots : </h4>
            <h4>Wallet Address : &nbsp;</h4>
            <h4>Fee : </h4>
            <h4>Date : </h4>
          </div>

          <div>
            <h4 style={{ color: 'greenyellow' }}>{plData.TotalSlots === 0 ? "No Slot" : plData.TotalSlots}</h4>
            <h4 style={{ color: 'yellow' }}>{plData.WalletAddress}</h4>
            <h4 style={{ color: 'yellow' }}>{plData.Fee}</h4>
            <h4 style={{ color: 'yellow' }}>{plData.date}</h4>
          </div>
        </div>
        <div className='flex justify-center mt-10 mb-10'>
          <button class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative" onClick={handleClick}>Book a slot</span>
          </button>
        </div>
      </div>)
    }
  </div>
  );
};

export default ParkingLot;
