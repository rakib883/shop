import { useDispatch, useSelector } from "react-redux"
import { FaXmark } from "react-icons/fa6";
import IncrementDecrementButton from "./IncrementDecrementButton";
import PrizeFormat from "../Component/PrizeFormat";
import { productDecrement, productIncrement, singleItemRemove } from "../Redux/Slice";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CartProduct = () => {
    const cartData = useSelector((state)=>state?.userData?.addCartData)
    console.log("data",cartData)
    const incrementData = useDispatch()
    const decrementData = useDispatch()
    const removeSingleData = useDispatch()
    const [radioData,setRadioCheck] = useState("")
    const [totalPrize,setTotalPrize] = useState()
    useEffect((item)=>{
        let totalPrize = 0
        cartData.map((item)=>
            totalPrize += item?.price * item?.quentity
        )
        setTotalPrize(totalPrize)
    })


    console.log(totalPrize)
  return (
    <div>
        {
        cartData.length > 0 ?
        (
            <div className="main-area">
            <table className="table-auto w-full font-sans border">
                <thead className=" bg-[#d1d5db]">
                    <tr className="">
                        <th className="text-start py-2  px-2">Product</th>
                        <th className=" py-2  px-2 text-center">Color</th>
                        <th className=" py-2  px-2 text-center ">Size</th>
                        <th className=" py-2  px-2 text-center">Price</th>
                        <th className=" py-2  px-2 text-center"> quantity</th>
                        <th className=" py-2  px-2 text-center">total</th>
                        <th className=" py-2  px-2 text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                       cartData.map((data)=>{
                          console.log("helllo",data.color[3])
                        return(
                            <tr key={data?.id} className="hover:bg-[#d1d5db]">
                                <td className="  py-2 px-4 ">
                                    <div className="main-content flex items-center gap-1">
                                        <div className="image h-16 w-16">
                                            <img src={data?.image} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{data?.title.substring(0,30)}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className=" text-center py-2 px-4">
                                    <div className="color flex justify-center items-center">
                                        <div className={`item bg-[${data?.color[0]}] h-5 w-5 rounded-full`}></div>
                                    </div>
                                </td>
                                <td className=" text-center py-2 px-4">{data?.productSize}</td>
                                <td className=" text-center py-2 px-4">
                                    <PrizeFormat price={data?.price} />
                                </td>
                                <td className=" text-center py-2 px-4">
                                   <div className="">
                                        <IncrementDecrementButton 
                                             incrementData={()=>incrementData(productIncrement({id:data?.id}))}
                                             decrementData={()=>decrementData(productDecrement({id:data?.id}))}
                                             quentity={data?.quentity} 
                                             className=" rounded-none py-2 border border-gray-300"/>
                                    </div>
                                </td>
                                <td className=" text-center py-2 px-4">
                                   <div>
                                       <PrizeFormat price={data?.quentity * data?.price} />
                                   </div>
                                </td>
                                <td className=" text-center py-2 px-4 cursor-pointer">
                                   <button onClick={()=>removeSingleData(singleItemRemove({id:data?.id}))}>
                                       <div className="item flex justify-center items-center">
                                         <FaXmark />
                                        </div>
                                   </button>
                                </td>
                           </tr>
                        )
                       })

                    }
                </tbody>
            </table>
            {/* cart bottom area start */}
            <div className="bottom-area my-4">
                <div className="main-content flex justify-between">
                    <div className="cupon w-[25%] ">
                        <div className="  w-full flex items-center border">
                            <div className="search w-[60%]">
                                <input className=" px-2 border-none outline-none font-sans bg-[#f8f8f8]" type="text"  placeholder="Discount Code"/>
                            </div>
                            <div className="button w-[40%] bg-black text-center">
                                <button className=" text-white py-3 font-sans">Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* shiping area start */}
                    <div className="pament w-[30%]">
                        <div className="button flex gap-2 font-semibold font-sans text-white">
                            <div className="w-[60%]">
                              <CustomButton className="w-full" title="Continue Cart"></CustomButton>
                            </div>
                            <div className="item w-[40%]">
                               <Link to="/cart">  <CustomButton className="w-full" title="Update Cart"></CustomButton></Link>
                            </div>
                            
                        </div>


                        <div className="shiping border">
                            <div className="maion  mx-4 font-sans font-semibold">
                               <div className="heading flex justify-between my-4">
                                 <div className="total">Subtotal</div>
                                 <div className="price text-red-700">
                                   <PrizeFormat price={totalPrize}/>
                                 </div>
                               </div>
                               <div className="border border-black my-4"></div>
                                <div className="content my-6  ">
                                   <h1>Shiping</h1>
                                   <div className=" my-2 text-[#928e8f]">
                                     <div className="shiping text-[14px] flex justify-between items-center">
                                        <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                            <input checked={radioData === "Free-Shiping"} type="radio" name="" id="" />
                                            <p onClick={()=>setRadioCheck("Free-Shiping")}>Free Shiping</p>
                                        </div>
                                        <p>302</p>
                                     </div>
                                     <div className="shiping text-[14px] flex justify-between items-center">
                                        <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                            <input checked={radioData === "Flat-Rate"  }  type="radio" name="" id="" />
                                            <p onClick={()=>setRadioCheck("Flat-Rate")}>Flat Rate</p>
                                        </div>
                                        <p>302</p>
                                     </div>
                                     <div className="shiping text-[14px] flex justify-between items-center">
                                        <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                            <input checked={radioData === "Local-Delivery" }  type="radio" name="" id="" />
                                            <p onClick={()=>setRadioCheck("Local-Delivery")}>Local Delivery</p>
                                        </div>
                                        <p>302</p>
                                     </div>
                                   </div> 
                                <h1 className=" font-sans font-semibold my-4">Calculate Shipping</h1>
                                </div>

                                <div className="calcute-content">
                                    <div className="upzela border">
                                        <select className=" text-[#9ca3b5] w-full cursor-pointer bg-[#f8f8f8] py-3 outline-none border-none px-3" name="" id="">
                                            <option value="">Gopalgonj</option>
                                        </select>
                                    </div>
                                    <div className="input mt-4 border">
                                        <input className="w-full cursor-pointer outline-none border-none py-3 px-3" type="text" placeholder="PostCode/Zip " />
                                    </div>
                                    <div className="button mt-4 text-center py-3">
                                        <CustomButton className="w-full text-white" title="Update Cart"/>
                                    </div>
                                </div>
                                <div className="heading flex justify-between my-4">
                                    <div className="total text-lg">Subtotal</div>
                                    <div className="price text-red-700 text-lg">
                                        <PrizeFormat price={totalPrize}/>
                                    </div>
                               </div>
                               <div className="button w-full pb-4">
                                 <CustomButton className="text-white w-full" title="Procced To Checkout"/>
                               </div>

                            </div>
                        </div>

                    </div>
                    {/* shiping area end */}
                </div>
            </div>
            {/* cart bottom area end */}
         </div>

        ) 
         :
        (
            <div className="item">
                <div className="item">
                    <h1 className=" font-sans text-[32px] font-semibold flex justify-center items-center py-8">Your Cat Have Empety</h1>
                </div>
            </div>
        )
        }
    </div>
  )
}

export default CartProduct
