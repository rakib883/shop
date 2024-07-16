import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

function NavBar() {
    const menu = [
        {name :"Home",path:"/"},
        {name :"Shop",path:"/shop"},
        {name :"About",path:"/about"},
        {name :"Blog",path:"/blog"},
        {name :"Contact",path:"/contact"},
    ]

    // catagory area staart
    const [catagory,setCatagoru] = useState([])
    const [catagoryOpen,setCatagoryOpen] = useState(false)

    useEffect(()=>{
        const fachingData = async()=>{
          try{
            const response = await fetch("http://localhost:3000/catagories")
            const data =await response.json()
            setCatagoru(data)
          }catch(error){
            console.log(error)
          }
        }
        fachingData()
    },[])
    // catagory are end
  return (
    <div className="bg-[#ffbb38] hidden md:block">
        <div className="main  mx-8  flex items-center gap-1">
            <div className="catagpry w-[25%] mt-2 mb-[2px] cursor-pointer bg-white py-4 rounded-t-lg relative ">
                 <div onClick={()=>setCatagoryOpen(!catagoryOpen)} className="content flex justify-between items-center px-2  ">
                    <div className=" flex gap-2 items-center ">
                        <HiMiniBars3BottomLeft />
                        <p>All Categories</p>
                    </div>
                    <div className="arrow">
                        <SlArrowDown />
                    </div>
                 </div>
                 {
                 catagoryOpen &&
                 <div className="hidden-catagory absolute flex flex-col gap-2 bg-white mt-4 w-full">
                    {
                        catagory.map((item)=>
                          <div key={item._id} className="item flex gap-1 items-center mx-2">
                              <div className="imagh ">
                                 <img className="w-9 h-9 rounded-full " src={item?.image} alt="" />
                              </div>
                               <div className="link ">
                                 <Link to={`/catagories/${item?._base}`}>{item?.name}</Link>
                               </div>
                          </div>
                        )
                    }
                 </div>
                 }
            </div>
            <div className=" w-[55%] ">
                <div className="menu flex mx-1 gap-8 font-sans font-semibold text-md">
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