import { useDispatch, useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import IncrementDecrementButton from "./IncrementDecrementButton";
import PrizeFormat from "../Component/PrizeFormat";
import { productDecrement, productIncrement, singleItemRemove } from "../Redux/Slice";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const CartProduct = () => {
    const userData = [
       { name:"Rakib",},
       { name:"sakib",}
    ]


    const cartData = useSelector((state) => state?.userData?.addCartData || []);
    const dispatch = useDispatch();
    const [radioData, setRadioCheck] = useState("");
    const [totalPrize, setTotalPrize] = useState(0);

    useEffect(() => {
        if (Array.isArray(cartData)) {
            let total = 0;
            cartData.forEach((item) => {
                total += (item?.price || 0) * (item?.quentity || 0);
            });
            setTotalPrize(total);
        }
    }, [cartData]);

  console.log(cartData)
    // proced handeler start
    const checkOut = {
        cartData:cartData,
        userData:userData
    }
    const procedHandeler = async()=>{
        try{
            const stripe = await loadStripe("pk_test_51PWscOL3BkBJk9RpVuFlO4f7SrTvDNHnFCVae0x6buv1S703qEvd3iEnDfqVQU9Iz1z6WDhV3M8IfhS1Za0O8v1z00UzkBSn5i")
            const response = await fetch("http://localhost:3000/proced-checkout",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify(checkOut)
            })

            const session = await response.json()
              const result = stripe.redirectToCheckout({
                 sessionId:session.id
            })
        console.log(session)
           
        }catch(error){
            console.log(error)
        }
    }
   
    return (
        <div>
            {cartData.length > 0 ? (
                
                <div className="main-area">

                      <div className="main">
                         <div className="table-con hidden md:block">
                            <table className="table-auto w-full font-sans  border">
                                <thead className="bg-[#d1d5db]">
                                    <tr>
                                        <th className="text-start py-2 px-2">Product</th>
                                        <th className="py-2 px-2 text-center">Color</th>
                                        <th className="py-2 px-2 text-center">Size</th>
                                        <th className="py-2 px-2 text-center">Price</th>
                                        <th className="py-2 px-2 text-center">Quantity</th>
                                        <th className="py-2 px-2 text-center">Total</th>
                                        <th className="py-2 px-2 text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map((data) => (
                                        <tr key={data?.id} className="hover:bg-[#d1d5db]">
                                            <td className="py-2 px-4">
                                                <div className="main-content flex items-center gap-1">
                                                    <div className="image h-16 w-16">
                                                        <img src={data?.image} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <p>{data?.title?.substring(0, 30)}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-2 px-4">
                                                <div className="color flex justify-center items-center">
                                                    <div
                                                        className={`item bg-[${data?.color?.[0]}] h-5 w-5 rounded-full`}
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className="text-center py-2 px-4">{data?.productSize}</td>
                                            <td className="text-center py-2 px-4">
                                                <PrizeFormat price={data?.price} />
                                            </td>
                                            <td className="text-center py-2 px-4">
                                                <IncrementDecrementButton
                                                    incrementData={() => dispatch(productIncrement({ id: data?.id }))}
                                                    decrementData={() => dispatch(productDecrement({ id: data?.id }))}
                                                    quentity={data?.quentity}
                                                    className="rounded-none py-2 border border-gray-300"
                                                />
                                            </td>
                                            <td className="text-center py-2 px-4">
                                                <PrizeFormat price={data?.quentity * data?.price} />
                                            </td>
                                            <td className="text-center py-2 px-4 cursor-pointer">
                                                <button onClick={() => dispatch(singleItemRemove({ id: data?.id }))}>
                                                    <div className="item flex justify-center items-center">
                                                        <FaXmark />
                                                    </div>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                        {/* small device area start */}
                        <div className="main my-4 md:hidden">
                            <div className="content ">
                               <div className="product-title flex justify-between">
                                 <h1 className=" font-semibold font-sans">Product detils</h1>
                                 <h1 className=" font-semibold font-sans">Price</h1>
                               </div>
                               <div className="product-title">
                                 {
                                    cartData.map((data)=>
                                      <div key={data?.id} className="main-area my-4">
                                          <div className="all-content flex items-center justify-between">
                                              <div className="image">
                                                  <div className="image flex items-center gap-1 font-sans font-semibold">
                                                     <div className="image w-14 h-14">
                                                        <img className="w-full h-full" src={data?.image[0]} alt="" />
                                                     </div>
                                                     <p>{data?.title.substring(0,20)}</p>
                                                  </div>
                                                  <div className="increment">
                                                     <IncrementDecrementButton
                                                     
                                                     incrementData={() => dispatch(productIncrement({ id: data?.id }))}
                                                     decrementData={() => dispatch(productDecrement({ id: data?.id }))}
                                                     quentity={data?.quentity}
                                                     className="w-full border border-black"/>
                                                  </div>
                                              </div>
                                              <div className="price">
                                                <PrizeFormat className="font-sans font-semibold" price={data?.price}/>
                                              </div>
                                          </div>
                                      </div>
                                    )
                                 }
                               </div>

                            </div>
                        </div>
                        {/* small device area end */}
                     </div>   
                    {/* Cart bottom area start */}
                    <div className="bottom-area my-4">
                        <div className="main-content md:flex justify-between">
                            <div className="cupon w-full md:w-[25%]">
                                <div className="w-full flex items-center border">
                                    <div className="search w-[80%] md:w-[60%]">
                                        <input
                                            className="px-2 text-[14px] md:text-base border-none outline-none font-sans bg-[#f8f8f8]"
                                            type="text"
                                            placeholder="Discount Code"
                                        />
                                    </div>
                                    <div className="button w-[20%] md:w-[40%] bg-black text-center">
                                        <button className="text-white md:py-3 font-sans py-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                            {/* Shipping area start */}
                            <div className="payment mt-4 md:mt-0 md:w-[30%] w-full">
                                <div className="button md:flex md:gap-2 font-semibold font-sans text-white">
                                    <div className="md:w-[60%] w-full">
                                        <CustomButton className="w-full" title="Continue Cart" />
                                    </div>
                                    <div className="item md:w-[40%] mt-2 md:mt-0">
                                        <Link to="/cart">
                                            <CustomButton className="w-full" title="Update Cart" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="shipping border">
                                    <div className="main mx-4 font-sans font-semibold">
                                        <div className="heading flex justify-between my-4">
                                            <div className="total">Subtotal</div>
                                            <div className="price text-red-700">
                                                <PrizeFormat price={totalPrize} />
                                            </div>
                                        </div>
                                        <div className="border border-black my-4"></div>
                                        <div className="content my-6">
                                            <h1>Shipping</h1>
                                            <div className="my-2 text-[#928e8f]">
                                                <div className="shipping text-[14px] flex justify-between items-center">
                                                    <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                                        <input
                                                            checked={radioData === "Free-Shipping"}
                                                            type="radio"
                                                            name="shipping"
                                                            id="free-shipping"
                                                        />
                                                        <p onClick={() => setRadioCheck("Free-Shipping")}>
                                                            Free Shipping
                                                        </p>
                                                    </div>
                                                    <p>302</p>
                                                </div>
                                                <div className="shipping text-[14px] flex justify-between items-center">
                                                    <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                                        <input
                                                            checked={radioData === "Flat-Rate"}
                                                            type="radio"
                                                            name="shipping"
                                                            id="flat-rate"
                                                        />
                                                        <p onClick={() => setRadioCheck("Flat-Rate")}>
                                                            Flat Rate
                                                        </p>
                                                    </div>
                                                    <p>302</p>
                                                </div>
                                                <div className="shipping text-[14px] flex justify-between items-center">
                                                    <div className="radio-icon flex items-center gap-1 cursor-pointer">
                                                        <input
                                                            checked={radioData === "Local-Delivery"}
                                                            type="radio"
                                                            name="shipping"
                                                            id="local-delivery"
                                                        />
                                                        <p onClick={() => setRadioCheck("Local-Delivery")}>
                                                            Local Delivery
                                                        </p>
                                                    </div>
                                                    <p>302</p>
                                                </div>
                                            </div>
                                            <h1 className="font-sans font-semibold my-4">
                                                Calculate Shipping
                                            </h1>
                                        </div>

                                        <div className="calculate-content">
                                            <div className="upzela border">
                                                <select
                                                    className="text-[#9ca3b5] w-full cursor-pointer bg-[#f8f8f8] py-3 outline-none border-none px-3"
                                                    name="location"
                                                    id="location"
                                                >
                                                    <option value="">Gopalgonj</option>
                                                </select>
                                            </div>
                                            <div className="input mt-4 border">
                                                <input
                                                    className="w-full cursor-pointer outline-none border-none py-3 px-3"
                                                    type="text"
                                                    placeholder="PostCode/Zip"
                                                />
                                            </div>
                                            <div className="button mt-4 text-center py-3">
                                                <CustomButton className="w-full text-white" title="Update Cart" />
                                            </div>
                                        </div>
                                        <div className="heading flex justify-between my-4">
                                            <div className="total text-lg">Subtotal</div>
                                            <div className="price text-red-700 text-lg">
                                                <PrizeFormat price={totalPrize} />
                                            </div>
                                        </div>
                                        <div onClick={procedHandeler} className="button w-full pb-4">
                                            <CustomButton className="text-white w-full" title="Proceed To Checkout" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Shipping area end */}
                        </div>
                    </div>
                    {/* Cart bottom area end */}
                </div>
            ) : (
                <div className="item">
                    <h1 className="font-sans text-md md:text-[32px] font-semibold flex justify-center items-center py-8">
                        Your Cart Is Empty
                    </h1>
                </div>
            )}
        </div>
    );
};

export default CartProduct;
