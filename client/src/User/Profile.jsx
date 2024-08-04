import { Link, Outlet } from "react-router-dom"
import FilterTitle from "../UI/FilterTitle"
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { IoLockClosedSharp } from "react-icons/io5";
import { FcSupport } from "react-icons/fc";
import { MdLogout } from "react-icons/md";
import FoterOffer from "../Component/FoterOffer";



function Profile() {
  return (
      <div className="main">
        <div className="main-content flex mx-8 my-8 py-8 bg-[#ffffff] shadow-xl">
           <div className="navber  w-[20%]">
              <div className="nav-content mx-4 p-1">
                 <div className="title">
                   <FilterTitle className="text-[22px] my-4" title="Your Dashboard" />
                 </div>
                 <div className="main-area flex flex-col gap-8 py-2"> 
                      <Link to="" className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><MdDashboard className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Dashbord</h1></div>
                      </Link>
                      <Link to="personal-info" className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><FaUserAlt className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Personal info</h1></div>
                       </Link>
                      <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                         <div className="icon"><MdOutlinePayment className=" text-[25px]" /></div>
                         <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Payment Method</h1></div>
                      </div>
                      <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><MdOutlineLocalGroceryStore className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Order</h1></div>
                      </div>
                      <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                        <div className="icon"><FaHeart className=" text-[25px]" /></div>
                        <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Wishlist</h1></div>
                       </div>
                        <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><FaAddressBook className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Address</h1></div>
                        </div>
                        <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><MdOutlinePreview className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Rivew</h1></div>
                        </div>
                        <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><IoLockClosedSharp className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Change Password</h1></div>
                        </div>
                        <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><FcSupport className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Support</h1></div>
                        </div>
                        <div className="all-link flex items-center gap-2 text-[#797979] duration-300 cursor-pointer hover:text-black">
                          <div className="icon"><MdLogout className=" text-[25px]" /></div>
                          <div className="text"><h1 className=" font-sans font-semibold text-[20px]">Logout</h1></div>
                        </div>
                 </div>
              </div>
           </div>
           <div className="content w-[80%] my-4 border-l-2"><Outlet/></div>
        </div>
        <FoterOffer/>
      </div>
  )
}

export default Profile