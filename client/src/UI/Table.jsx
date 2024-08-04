

import { HiXMark } from "react-icons/hi2";
import PrizeFormat from "../Component/PrizeFormat";
import IncrementDecrementButton from "./IncrementDecrementButton";
import { useDispatch, useSelector } from "react-redux";
import { favoriteProductSinglProductRemove } from "../Redux/Slice";
function WishListTable({wishListDat}) {
  // table single data remove area start
   const removeSingleData = useDispatch()
  // table single data area start

  // access favorite data start
  const favoriteData = useSelector((state)=>state?.userData?.favorite)
  
  // access favorite data area end

  return (
    
    <div>
           <table className=" w-full my-4   border border-gray-500 ">
            <thead className=" py-4 border border-gray-500 ">
              <tr className="bg-gray-300 ">
                <th className="text-start py-4 px-2 font-sans uppercase">Product</th>
                <th className=" text-center py-4 px-2 font-sans  uppercase">Color</th>
                <th className=" text-center py-4 px-2 font-sans uppercase">Size</th>
                <th className=" text-center py-4 px-2 font-sans uppercase">price</th>
                <th className=" text-center py-4 px-2 font-sans uppercase"> quantity</th>
                <th className=" text-center py-4 px-2 font-sans uppercase">total</th>
                <th className=" text-center py-4 px-2 font-sans uppercase"></th>
              </tr>
            </thead>
            <tbody className="border border-gray-500 ">
                {
                  wishListDat.map((item)=>{
                      const existingDataCheck = favoriteData.find((state)=>state?.id === item?.id)
                    return(
                    <tr key={item?.id} className="">
                      <td className="text-center py-2 px-2 border border-gray-500">
                         <div className="main flex items-center">
                            <div className="image">
                                <img className=" h-20 w-20" src={item?.image} alt="image" />
                              </div>
                              <div className="title">
                                <h1>{item?.title.substring(0,20)}</h1>
                              </div>
                         </div>
                      </td> 
                       <td className=" text-center py-2 px-2 border  border-gray-500 ">
                        <div className="content flex justify-center items-center">
                            <div className={`bg-[${item?.color[0]}] rounded-full h-4 w-4`}>
                              
                             </div>
                        </div>
                      </td> 
                      <td className=" text-center py-2 px-2 border border-gray-500 ">M</td>
                      <td className=" text-center py-2 px-2 border border-gray-500 ">
                         <PrizeFormat price={item?.price}/>
                      </td>
                      <td className=" text-center py-2 px-2 border border-gray-500 ">
                        <IncrementDecrementButton quentity={existingDataCheck?.quentity} className=" rounded-none border-gray-200 py-1"/>
                      </td> 
                       <td className=" text-center py-2 px-2 border border-gray-500 "> <PrizeFormat price={item?.quentity * item.price}  />  </td> 
                       <td onClick={()=>removeSingleData(favoriteProductSinglProductRemove({id:item?.id}))} className=" text-center py-2 px-2 cursor-pointer border border-gray-500 "><HiXMark className="text-center mx-auto" /></td>
                  </tr>)}
                  )
                } 
             
            </tbody>
          </table>  
    </div>
  )
}

export default WishListTable