import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FachingData } from "../UI/Faching"
import { IoIosStar } from "react-icons/io";
import PrizeFormat from "../Component/PrizeFormat";
import { FaRegHeart } from "react-icons/fa";
import FilterTitle from "../UI/FilterTitle";
import FoterOffer from "../Component/FoterOffer";

function SingleProduct() {

    const {id} = useParams()
    const [singleData,faceSingleData] = useState()
    const incomingData = `http://localhost:3000/product/${id}`
    useEffect(()=>{
       const faceData = async()=>{
            try{
                const response = await FachingData(incomingData)
                faceSingleData(response)
            }catch(error){
              console.log(error.message)
            }finally{
               console.log("data not found")
            }
       }
       faceData()
    },[incomingData])
   

    // product color area start
    const [productColor,setProductColor] = useState(0)
    // product color area end

   //  releted product are start
     const [reltedData,setReletedData] = useState([])
     useEffect(()=>{
         const incomingData = async ()=>{
            const response = await  FachingData(`http://localhost:3000/catagories/${singleData?._base}`)
            setReletedData(response)
         }
         incomingData()
     },[singleData?._base])
       
   // releted product are end
  console.log(reltedData)
  return (
    <div>
       <div className="content m-8">
           <div className="items md:flex gap-4">
              <div className="image w-full md:w-[50%]">
                 <img src={singleData?.images[productColor]} alt="img" />
              </div>
              <div className="descprtion w-full md:w-[50%]">
                <div className="content flex flex-col gap-4">
                  <div className="title">
                     <h1 className="font-sans text-lg font-semibold">{singleData?.name}</h1>
                     <div className="review flex items-center gap-2 mt-2">
                        <IoIosStar className="text-[#ffbb38]" />
                        <IoIosStar className="text-[#ffbb38]" />
                        <IoIosStar className="text-[#ffbb38]" />
                        <IoIosStar className="text-[#ffbb38]" />
                        <IoIosStar className="text-[#ffbb38]" />
                        <span className="flex gap-2"> <p>Review</p> {singleData?.reviews}</span>
                     </div>
                  </div>
                  <div className="prize-area flex gap-2 items-center">
                     <del><PrizeFormat price={singleData?.regularPrice} /></del>
                     <PrizeFormat className="text-xl font-semibold text-[red]" price={singleData?.discountedPrice} />
                  </div>

                  <div className="dec">
                     <p className=" font-sans first-letter:uppercase">{singleData?.description}</p>
                  </div>
                  <div className="color">
                      <p className="text-md font-sans font-semibold">Color</p>
                      <div className="color-area flex gap-2">
                        <div onClick={()=>setProductColor(0)} className={`yellow-color h-[25px] w-[25px] rounded-full cursor-pointer p-[2px]   ${productColor === 0 ? " border-2 border-[#eab308]" : "" } `}>
                            <div className="content w-full h-full bg-yellow-500 rounded-full"></div>
                        </div>
                        <div onClick={()=>setProductColor(1)} className={`yellow-color h-[25px] w-[25px] rounded-full cursor-pointer p-[2px]   ${productColor === 1 ? "border-2 border-gray-600" : "" } `}>
                            <div className="content w-full h-full bg-gray-600 rounded-full"></div>
                        </div>
                        <div onClick={()=>setProductColor(2)} className={`yellow-color h-[25px] w-[25px] rounded-full cursor-pointer p-[2px]   ${productColor === 2 ? "border-2 border-[#649eff]" : "" } `}>
                            <div className="content w-full h-full bg-[#649eff] rounded-full"></div>
                        </div>
                        <div onClick={()=>setProductColor(3)} className={`yellow-color h-[25px] w-[25px] rounded-full cursor-pointer p-[2px]   ${productColor === 3 ? "border-2 border-[red]" : "" } `}>
                            <div className="content w-full h-full bg-[red] rounded-full"></div>
                        </div>
                      </div>
                  </div>
                  <div className="prize-area">
                      <div className="size">
                        <h1 className=" font-sans text-md">SIZE</h1>
                        <div className="size-area">
                          <select className=" w-full py-2 outline-none border bg-[#f8f8f8] mt-1 cursor-pointer" name="" id="">
                             <option value="">Select size</option>
                             <option value="">Small</option>
                             <option value="">Medium</option>
                             <option value="">Large</option>
                             <option value="">Extra Large</option>
                          </select>
                        </div>
                      </div>
                  </div>
                  <div className="addToCard md:flex md:gap-2  gap-y-2">
                     <div className="content md:w-[30%] border ">
                        <div className="increment  mx-4 flex justify-between">
                           <div className="increment cursor-pointer text-xl font-sans py-2">+</div>
                           <div className="quntity cursor-pointer text-xl font-sans py-2">0</div>
                           <div className="decrement cursor-pointer text-xl font-sans py-2">-</div>
                        </div>
                     </div>
                     <div className="favorite hidden md:block w-[10%] md:inline-flex justify-center border items-center py-2 cursor-pointer">
                       <FaRegHeart className=" text-xl" />
                     </div>
                     <div className="add-cart w-full md:w-[60%] bg-black ">
                        <button className=" text-center  w-full  py-2 text-white">Add To Cart</button>
                     </div>
                  </div>
                  <div className="review-area">
                     <p className=" font-sans text-md">Caragory : {singleData?.category}</p>
                     <p>Tags:</p>
                  </div>
                </div>
              </div>
           </div>
           <div className="releted-product my-8">
              <div className="title">
                  <FilterTitle className="text-[30px]" title="Related Product" />
              </div>
              <div className="product grid md:grid-cols-5 gap-4 my-4">
                   {
                     reltedData?.map((item)=>
                     
                        <div key={item?._id} className="main bg-white">
                             <Link to={`/product/${item?._id}`} className="image">
                                <img src={item?.images} alt="" />
                             </Link>
                             <div className="dec-area my-2 mx-2">
                                <h1 className=" font-sans text-md font-semibold">{item?.name.substring(0,25)}</h1>
                                 <div className="prize-area flex gap-2">
                                    <del>
                                      <PrizeFormat className="text-base" price={item?.regularPrice} />
                                    </del>
                                    <PrizeFormat className="text-md font-semibold" price={item?.discountedPrice} />
                                 </div>
                                 <div className="order-button bg-[#ffa800] text-center cursor-pointer">
                                    <button className=" text-center py-1 font-sans font-semibold">Add To Cart</button>
                                 </div>
                             </div>
                        </div>

                     )
                  } 
              </div>
              <div className="bottom-area">
                 <FoterOffer/>
              </div>
           </div>
       </div>
    </div>
  )
}

export default SingleProduct