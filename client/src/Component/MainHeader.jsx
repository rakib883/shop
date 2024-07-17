import { Link } from "react-router-dom"
import logog from "../assets/logo.svg"
import { FaRegUser } from "react-icons/fa6";
 import { LiaShoppingBagSolid } from "react-icons/lia";
 import { CiHeart } from "react-icons/ci";
 import { LuRefreshCw } from "react-icons/lu";
 import { FaBarsStaggered } from "react-icons/fa6";
 import { HiOutlineXMark } from "react-icons/hi2";
 import { FiRefreshCcw } from "react-icons/fi";
 import { IoIosSearch } from "react-icons/io";
 import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";


function MainHeader() {
  // menu catagory area start
   const [catagoryOpen,setcatagoryItems] = useState(true)
  // menu catagory are end

  // catagory data faching area start
  const [catagory,setCatagory] = useState([])
   useEffect(()=>{
      const fetchData = async()=>{
       try{
         const response = await fetch("http://localhost:3000/catagories")
         const data = await response.json()
         setCatagory(data)
       }catch(error){
        console.log(error)
       }
      }
      fetchData()
   },[])
  // catagory data faching area end
  

  // main mobile menu  area start 
  const menu = [
    {name :"Home",path:"/"},
    {name :"Shop",path:"/shop"},
    {name :"About",path:"/about"},
    {name :"Blog",path:"/blog"},
    {name :"Contact",path:"/contact"},
]
  // main mobile menu are end

  // mobile menu click handeler start
     const [catagoryHandeler,setCatagoryHandeler] = useState(false)
  // mobile menu click handeler end
  return (
    <div>
        <div className="main-content mx-8 flex items-center py-6">
            <div className="logo-area w-[30%]">
                <div className="image-area">
                  <FaBarsStaggered onClick={()=>setCatagoryHandeler(true)} className=" block  md:hidden text-xl cursor-pointer" />
                  {/* mobile menu area start */}
                   <div className={`mobile-menu ${ catagoryHandeler ? "left-0 duration-300" :"left-[-600px] duration-300" }  bg-white w-[80%] shadow-xl absolute top-0 shadow-xl md:hidden z-50`}>
                      <div className="main-items mx-4">
                          <div className="header flex justify-between items-center my-4">

                            <div className="menu flex items-center gap-6">
                               <div className=" cursor-pointer relative">
                                   <FaRegHeart className="text-2xl" />
                                    <div className="text absolute flex justify-center items-center bg-[#ffbb38] w-4 h-4 rounded-full top-[-5px] right-[-12px]">
                                      <p className=" text-base">0</p>
                                    </div>
                                </div>
                                <div className=" cursor-pointer relative">
                                   <FiRefreshCcw  className="text-2xl" />
                                    <div className="text absolute flex justify-center items-center bg-[#ffbb38] w-4 h-4 rounded-full top-[-5px] right-[-12px]">
                                      <p className=" text-base ">10</p>
                                    </div>
                                </div>
                                <div className="user cursor-pointer">
                                   <FaRegUserCircle className=" text-2xl" />
                                </div>
                            </div>


                            <div onClick={()=>setCatagoryHandeler(false)} className="cross-icon bg-red-600 cursor-pointer rounded-full h-8 w-8 flex justify-center items-center">
                               <HiOutlineXMark className=" text-2xl" />
                            </div>
                          </div>


                          <div className="mobile-sear my-4">
                              <div className="main-area bg-white flex items-center border">
                                 <input className="text-md placeholder:font-sans px-2 outline-none border-none w-[80%] " type="text" placeholder="Seach..." />
                                 <div className="icon cursor-pointer py-1 bg-[#ffbb38] w-[20%] flex justify-center items-center">
                                   <IoIosSearch className="text-xl font-bold " />
                                 </div>
                              </div>
                          </div>

                          {/* mobile menu catagory header start */}
                          <div className="main">
                            <div className="content mx-4">
                              <div className="header flex justify-between items-center">
                                 <h1 onClick={()=>setcatagoryItems(true)} className="font-sans font-semibold cursor-pointer">Catagory</h1>
                                 <h1 onClick={()=>setcatagoryItems(false)} className="font-sans font-semibold cursor-pointer">Main Menu</h1>
                              </div>
                              {/* main catagory item start */}
                                 <div className="">
                                  {
                                    catagoryOpen ?
                                   <div className="catagory">
                                     <div className="items flex flex-col gap-2">
                                        {
                                          catagory.map((item)=>
                                            <Link onClick={()=>setCatagoryHandeler(false)} to={`/catagories/${item?._base}`} key={item._id} className="main-items flex items-center gap-2 py-2">
                                                 <div className="list-image-none h-6 w-6 rounded-full">
                                                    <img className=" h-full w-full rounded-full" src={item?.image} alt="catagory" />
                                                 </div>
                                                 <div className="text">
                                                   {item?.name}
                                                 </div>
                                            </Link>
                                          )
                                        }
                                     </div>
                                   </div>
                                   :
                                   <div className="menu flex flex-col gap-2 my-4 ">
                                     {
                                       menu.map((item)=>
                                         <Link onClick={()=>setCatagoryHandeler(false)} to={item?.path} key={item?.id} className="main font-sans font-semibold ">
                                            {item?.name}
                                         </Link>
                                      ) 
                                     }
                                   </div>
                                   }
                                 </div>
                              {/* main catagory end */}
                            </div>
                          </div>
                          {/* mobile menu catagory header end */}

                      </div>
                   </div>
                   {/* mobile menu are end */}
                   <Link className="hidden md:block" to="/">
                     <img className="h-10 w-40" src={logog} />
                   </Link>
                </div>
            </div>
            <div className="search-area w-[40%]">
                {/* mobile items start */}
                   <Link className="md:hidden flex justify-center items-center" to="/">
                     <img className="h-10 w-40" src={logog} />
                   </Link>
                {/* mobile items end */}
                <div className="all-content md:flex md:justify-between justify-center items-center border hidden md:block    ">
                     <div className="w-[50%] relative customSideBorder">
                        <input className=" lg:w-[80%]  px-2 outline-none border-none bg-[#f8f8f8]" type="text" placeholder="Search" />
                     </div>
                     <div className="dropdown w-[40%] cursor-pointer hidden lg:block ">
                       <p>Select Catagory</p>
                     </div>
                     <div className="w-[20%] cursor-pointer py-2 text-center font-MainFont font-semibold bg-[#ffbb38]">
                        <button className=" font-sans">Search</button>
                     </div>
                    
                </div>
            </div>
            <div className="profile w-[30%] flex  justify-end">
                <div className="content flex gap-6 items-center">
                   <div className="user cursor-pointer relative hidden md:block">
                         <LuRefreshCw className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                   <div className="user cursor-pointer relative hidden md:block">
                         <CiHeart className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                    <div className="user cursor-pointer relative ">
                         <LiaShoppingBagSolid className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">0</p>
                    </div>
                    <div className="user cursor-pointer relative hidden md:block">
                         <FaRegUser className="text-2xl" />
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader