import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function NavBar() {
    const menu = [
        {name :"Home",path:"/"},
        {name :"Shop",path:"/shop"},
        {name :"About",path:"/about"},
        {name :"Blog",path:"/blog"},
        {name :"Contact",path:"/contact"},
    ]
  return (
    <div className="bg-[#ffbb38]">
        <div className="main  mx-8  flex items-center gap-4">
            <div className="catagpry w-[20%] mt-2 mb-[2px] cursor-pointer bg-white py-4 rounded-t-lg ">
               <div className="content flex justify-between items-center px-2  ">
                   <div className=" flex gap-2 items-center ">
                      <HiMiniBars3BottomLeft />
                      <p>All Categories</p>
                   </div>
                   <div className="arrow">
                     <SlArrowDown />
                   </div>
                </div>
            </div>
            <div className=" w-[60%] ">
                <div className="menu flex gap-8 font-sans font-semibold text-md">
                    {
                        menu.map((item)=>(
                            <Link key={item.name} to={item.path}>{item.name}</Link>
                            
                        ))
                    }
                </div>
            </div>
            <div className="seller w-[20%]  flex justify-end ">
                <p className="bg-black text-white font-MainFont font-semibold px-4 py-2">
                    <Link className="flex items-center gap-2 font-sans">Become A seller <MdOutlineKeyboardArrowRight className=" font-semibold" /> </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NavBar