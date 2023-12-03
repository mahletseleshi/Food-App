import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {

const[nav, setNav] = useState(false)








  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className=" max-w-[1640px] flex items-center justify-center gap-4">
        <div onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className="cursor pointer"/>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden   md:flex items-center text-sm bg-gray-300 p-1 rounded-full">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200  flex  rounded-full w-[200px] md:w-[300px] lg:w-[400px] items-center  p-2">
        <AiOutlineSearch />
        <input type="text" placeholder="Search for food" className="bg-transparent text-sm px-2" />
      </div>

      <div className=" bg-black text-white items-center p-4 rounded-full py-2 hidden md:flex">
        <BsFillCartFill size={20} className="mr-2" />
        <p>Cart</p>
      </div>
    
  {nav ? <div className="bg-black/80 h-screen w-full z-10 top-0 left-0 fixed"> </div> : ""}
      


      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <div onClick={() => setNav(!nav)}>
        <AiOutlineClose size={25} className=" absolute top-4 right-4" />
        </div>
        <h2 className="text-3xl p-4">Best <span className="font-bold">Eats</span></h2>
        <div>
        <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </div>
      </div>
    </div>
   
  );
};

export default Navbar;
