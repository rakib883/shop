
import { FaRegStar } from "react-icons/fa";
import PrizeFormat from "./PrizeFormat";
import { BsMinecart } from "react-icons/bs";
import { FaArrowsAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { Link } from "react-router-dom";

function WazWorld({ waZdata = [], bannerImage, linkItems = [],header,foter }) {
  return (
    <div>
        <div className="all-content mx-auto md:mx-8 my-4">
            <div className="main-content md:flex gap-4  my-4">
                <div className="banner h-full md:w-[25%] relative ">
                    <img className="w-full" src={bannerImage} alt="waz"/>
                    <div className="overlayitems absolute top-8 left-8 flex flex-col gap-2">
                          <h1 className=" font-sans font-semibold">{header}</h1>
                          {
                            linkItems.map((item)=>
                                <div key={item.id} className="all-items">
                                  <Link className=" text-gray-500 font-sans font-medium" to={item?.path}>{item.name}</Link> 
                                </div>
                            )
                        }
                        <h1 className=" font-sans font-semibold flex items-center">{foter}</h1>  
                    </div>
                </div>
                <div className="product w-[100%] md:w-[75%] grid md:grid-cols-3 grid-cols-2  gap-4 ">
                      {
                        waZdata.map((item)=>(
                            <div key={item.id} className="all-c0ntent bg-white relative overflow-hidden group" >
                                <div className="image">
                                    <img src={item?.images[0]}/>
                                </div>
                                <div className="user-rating mt-6 flex text-[#ffbb38] gap-2 mx-4 my-4">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar /> ({item.rating} Rating)
                                </div>
                                <div className="all-content mx-4">
                                    <div className="content">
                                       <p className="font-sans font-bold text-md">{item?.name.substring(0,40)}....</p>
                                    </div>
                                    <div className="price flex gap-2 mt-4 ">
                                        <del> <PrizeFormat className=" font-sans font-bold text-[#7b7b7b]" price={item?.regularPrice} /></del>
                                        <PrizeFormat className=" font-sans font-bold text-red-700" price={item?.discountedPrice} />
                                    </div>
                                    <div className="icon absolute top-[30%] right-[-40px] group-hover:right-4 duration-300">
                                        <div className="icon flex flex-col gap-4">
                                            <div className="icon bg-[#ffbb38] cursor-pointer p-2">
                                                 <FaArrowsAlt className="text-xl" />
                                             </div>
                                             <div className="icon bg-[#ffbb38] cursor-pointer p-2">
                                                 <FaRegHeart className="text-xl" />
                                             </div>
                                             <div className="icon bg-[#ffbb38] cursor-pointer p-2">
                                                 <LuRefreshCw className="text-xl" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className=" cursor-pointer w-full    ">
                                        <div className="button-area flex gap-4  text-md  py-[6px] items-center justify-center bg-[#ffa800] hover:bg-orange-700 duration-300">
                                            <p><BsMinecart /></p>
                                            <p className=" font-sans font-semibold">Add To Cart</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                      }
                </div>
            </div>
        </div> 
    </div>
  )
}

export default WazWorld