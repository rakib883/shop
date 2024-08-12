import { useEffect, useState } from "react"
import Title from "./Title"
import { Commet } from "react-loading-indicators"
import { FaRegStar } from "react-icons/fa";
import PrizeFormat from "./PrizeFormat";
import { FaArrowsAlt } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addFavorite, addToCart, productDecrement, productIncrement } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import IncrementDecrementButton from "../UI/IncrementDecrementButton";



function NewArrival() {

  // all data faching area start
  const [dataLOading,setDataLoading ] = useState(false)
  const [arraval,setArraval] = useState([])
  useEffect(()=>{
    setDataLoading(true)
    const newArravlaData = async()=>{
       try{
          const response = await fetch("https://shop-steel-ten.vercel.app/product")
          const data =await response.json()
          setArraval(data)
       }catch(error){
        console.log(error)
       }
       setDataLoading(false)
    }
     newArravlaData()
  },[])
  // all data faching are end

  //  add to cart are start
  const newArrivalDispatc = useDispatch()
  const cartData = useSelector((item)=>item?.userData?.addCartData)
  // add to cart area end
  
  // data increment area start
  const productIncrementItem = useDispatch()
  // data increment are end

  // product decrement area start
   const productDecrementArea = useDispatch()
  // product decrement area end

  // favorite add area start
  const favorite = useDispatch()
  // favorite area end
  
  return (
    <div>
        <div className="all-content mx-8">
            <div className="title">
                <Title firstTitle="New Arrivals" />
            </div>
            <div className="all-content">
               {
                 dataLOading ?
                  <div className="loader flex justify-center items-center">
                      <Commet color="#32cd32" size="medium" text="" textColor="" />
                  </div>
                 :
                 <div className="all-content gap-2 grid grid-cols-1 flex-1  md:grid-cols-4 lg:grid-cols-4">
                  {
                    arraval.map((item)=>{
                       const exitData =cartData.find((state)=>state?.id === item?._id )
                      return(
                      <div key={item?._id} className="main-div bg-white relative  overflow-hidden ">
                           <div className="all-content group">
                              <Link to={`/product/${item?._id}`} className="image">
                                <img src={item.images[0]} />
                              </Link>
                              <div className="user-rating mt-6 flex text-[#ffbb38] gap-2 mx-4 my-4">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar /> ({item.rating} Rating)
                                </div>
                                <div className="all-content mx-4 ">
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
                                             <div 
                                             
                                               onClick={()=>favorite(addFavorite({
                                                image: item?.images,
                                                title: item?.name,
                                                id: item._id,
                                                price: item?.regularPrice,
                                                quentity : 1,
                                                color:item?.colors
                                                
                                               }))}
                                              className="icon bg-[#ffbb38] cursor-pointer p-2">
                                                 <FaRegHeart className="text-xl" />
                                             </div>
                                             <div className="icon bg-[#ffbb38] cursor-pointer p-2">
                                                 <LuRefreshCw className="text-xl" />
                                             </div>
                                        </div>
                                    </div>
                                    <div className=" cursor-pointer w-full    ">
                                      {
                                      exitData ?
                                      <div className="">
                                         <IncrementDecrementButton 
                                                incrementData={()=>productIncrementItem(productIncrement({
                                                   id:item._id,
                                                }))   } 
                                                decrementData={()=>productDecrementArea(productDecrement({
                                                  id:item._id,
                                                }))}
                                                quentity={exitData?.quentity} 
                                                className="py-1"
                                          />
                                       </div>
                                      :
                                       <div 
                                            onClick={()=>newArrivalDispatc(addToCart({
                                              image: item?.images,
                                              title: item?.name,
                                              id: item._id,
                                              price: item?.regularPrice,
                                              quentity: 1,
                                              color:item?.colors,
                                              productSize:"X"
                                             })) && toast.success(`${item?.name.substring(0,10)} is added`)}
                                        
                                           className="button-area flex gap-4  text-md  py-[6px] items-center justify-center bg-[#ffa800] hover:bg-orange-700 duration-300">
                                            <p><BsMinecart /></p>
                                            <ToastContainer />
                                            <p className=" font-sans font-semibold text-base">Add To Cart</p> 
                                        </div> 
                                        
                                      }
                                    </div>
                                </div>
                           </div>
                      </div>)
                    
                      })
                  }
                 </div>
               }
            </div>

            {/* waz ads area start */}
            <div className="main my-8">
               <div className="image w-full">
                 <img className="w-full" src="https://i.ibb.co/7ksC2K1/ads-4.png"/>
               </div>
               <div className="content">
                   
               </div>
            </div>
            {/* waz ads are end */}
        </div>
    </div>
  )
}

export default NewArrival