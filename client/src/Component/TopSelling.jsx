
import { FaRegStar } from "react-icons/fa";
import PrizeFormat from "./PrizeFormat";
import Title from "./Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productDecrement, productIncrement } from "../Redux/Slice";
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IncrementDecrementButton from "../UI/IncrementDecrementButton";

function TopSelling({topSellData}) {


    
//  cart area start
 const productDispatch = useDispatch()
 const cartData = useSelector((cartData)=>cartData?.userData?.addCartData)
// cart area end




// product increment area start
const productCartIncrement = useDispatch()
const reduxData = useSelector((item)=>item?.userData?.addCartData)
// product increment area start




// product decrement area start
const decrement = useDispatch()
// product ecrement are end


  return (
    <div>
        <div className="content mx-8 my-8">
            <div className="title">
                <Title firstTitle="Top Selling Products"  secendTitle="view more"
                // secendTitle={<Link to="hello">View more</Link>}
                /> 
            </div>
             <div className="dataarea">
                {
                    <div className="product grid md:grid-cols-2 grid-cols-1 gap-4">
                        {
                        topSellData.map((item)=>{
                             const existData = cartData.find((state)=>state?.id === item._id)
                            return(
                            <div key={item._id} className="main-area md:flex py-2 justify-center items-center bg-white">
                                <div className="image w-full md:w-[50%]">
                                    <Link to={`/product/${item?._id}`} className="image h-[200px] bg-red-800">
                                       <img className="h-full w-full" src={item.images[0]} />
                                    </Link >
                                </div>
                                <div className="des w-full md:w-[50%] mx-4 flex flex-col md:gap-4">
                                    <div className="rating flex gap-2">
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    </div>
                                    <div className="product">
                                        <h1 className=" font-sans font-semibold">{item?.description.substring(0,100)}</h1>
                                    </div>
                                    <div className="price flex items-center gap-2">
                                        <del><PrizeFormat className=" font-sans text-xl font-semibold" price={item?.regularPrice}/></del>
                                        <PrizeFormat className=" font-sans text-xl font-semibold text-red-500" price={item?.discountedPrice}/>
                                    </div>
                                   <div className="button">
                                      {
                                        existData ? 
                                        <div>
                                            <IncrementDecrementButton 
                                                incrementData={()=>productCartIncrement(productIncrement({
                                                    image:item?.images,
                                                    title:item?.name,
                                                    id:item._id,
                                                    price:item?.regularPrice,
                                                    quentity:1
                                                }))} 

                                                decrementData={()=>decrement(productDecrement({
                                                    id:item._id,
                                                }))} 
                                                quentity={existData?.quentity} 
                                                className=" w-[140px]"/>
                                        </div>
                                        :
                                        <div
                                            onClick={()=>productDispatch(addToCart({
                                                image:item?.images,
                                                title:item?.name,
                                                id:item._id,
                                                price:item?.regularPrice,
                                                quentity:1,
                                                color:item?.colors,
                                                productSize:"X"
                                            })) &&  toast.success(`${item?.name} is added`)}
                                            className="order cursor-pointer w-[150px] text-center bg-[#ffbb38] px-4 py-[4px] font-sans font-semibold">
                                            <p>Add To Cart</p>
                                            
                                        </div>
                                      }
                                       
                                   </div>
                                </div>
                            </div>)}
                        )
                        }
                    </div>
                }
            </div>   
        </div>
    </div>
  )
}

export default TopSelling