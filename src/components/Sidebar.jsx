import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";



const Sidebar = () => {
  return (
   <>
   <div className='sidede'>
    <div className='top-content'>
        <div className="itmes"><IoMdHome/>Home</div>
        <div className="itmes"><IoIosNotifications/>Notification</div>
        <div className="itmes"><FaShoppingBag/>Shop</div>
        <div className="itmes"><BiSolidConversation/>Conversation</div>
        <div className="itmes"><FaWallet/>Wallet</div>
        <div className="itmes"><FaMoneyCheckAlt/>Subscription</div>
        <div className="itmes"><CgProfile/>My Profile</div>
    </div>
    <div className="bottom-content itmes">
        <IoMdLogOut/>
        log Out
    </div>

   </div>
   
   
   </>
  )
}

export default Sidebar
