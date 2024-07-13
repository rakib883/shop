import { Link } from "react-router-dom"
import logog from "../assets/logo.svg"
import { FaRegUser } from "react-icons/fa6";
 import { LiaShoppingBagSolid } from "react-icons/lia";
 import { CiHeart } from "react-icons/ci";
 import { LuRefreshCw } from "react-icons/lu";
function MainHeader() {
  return (
    <div>
        <div className="main-content mx-8 flex items-center py-6">
            <div className="logo-area w-[30%]">
                <div className="image-area">
                   <Link to="/">
                     <img className="h-10 w-40" src={logog} />
                   </Link>
                </div>
            </div>
            <div className="search-area w-[40%] ">
                <div className="all-content flex justify-center items-center border   ">
                     <div className="w-[50%] relative customSideBorder">
                        <input className="  px-2 outline-none border-none bg-[#f8f8f8]" type="text" placeholder="Search" />
                     </div>
                     <div className="dropdown w-[40%] cursor-pointer ">
                       <p>Select Catagory</p>
                     </div>
                     <div className="w-[20%] cursor-pointer py-2 text-center font-MainFont font-semibold bg-[#ffbb38]">
                        <button className=" font-sans">Search</button>
                     </div>
                    
                </div>
            </div>
            <div className="profile w-[30%] flex  justify-end">
                <div className="content flex gap-6 items-center">
                   <div className="user cursor-pointer relative">
                         <LuRefreshCw className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                   <div className="user cursor-pointer relative">
                         <CiHeart className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                    <div className="user cursor-pointer relative">
                         <LiaShoppingBagSolid className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                    <div className="user cursor-pointer relative">
                         <FaRegUser className="text-2xl" />
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader