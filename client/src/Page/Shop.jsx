import { useEffect, useState } from "react"
import { FachingData } from "../UI/Faching"
import { Link, useParams } from "react-router-dom"
import Seperator from "../UI/Seperator"
import BrandFilter from "../Component/BrandFilter"
import FilterTitle from "../UI/FilterTitle"
import { FaRegStar } from "react-icons/fa";
import PrizeFormat from "../Component/PrizeFormat"
import { FaArrowsAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { BsMinecart } from "react-icons/bs";
import { Commet } from "react-loading-indicators"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addFavorite, addToCart, productDecrement, productIncrement } from "../Redux/Slice"
import IncrementDecrementButton from "../UI/IncrementDecrementButton"


function Shop() {
    const [loading,setLoading] = useState(false)
    // catagory are start
     const [catagory,setCatagory] = useState([])
     const [MdCheckBox,setCheckBoxData] = useState(0)
     useEffect(()=>{
        const fachingData = async()=>{
            try{
                const catagoryUrl = "https://shop-steel-ten.vercel.app/catagories"
                const Newdata = await FachingData(catagoryUrl)
                setCatagory(Newdata)
            }catch(error){
                console.log(error)
            }
        }
        fachingData()
     },[])
    // catagory area end


    // shop data faching are start
     const [shopData,setShopData] = useState([])
     useEffect(()=>{
        const fachingData = async()=>{
            setLoading(true)
            try{
                const catagoryUrl = "https://shop-steel-ten.vercel.app/product"
                const Newdata = await FachingData(catagoryUrl)
                setShopData(Newdata)
            }catch(error){
                setLoading(false)
                console.log(error)
            }
            setLoading(false)
        }
        fachingData()
     },[])
    // shopdata faching end


    // recive diffrent catagory data start
    const [reciveCatagoryBase,setReciveDataCatagoryBase] = useState()
    useEffect(()=>{
        const incomingData = async()=>{
          if(reciveCatagoryBase){
            setLoading(true)
            try{
                const response = await fetch(`https://shop-steel-ten.vercel.app/catagories/${reciveCatagoryBase}`)
                const data = await response.json()
                setShopData(data)
              }catch(error){
                setLoading(false)
                console.log(error)
              }
              setLoading(false)
          }
        }
        incomingData()
    },[reciveCatagoryBase])
    
    // recive difrent catagory data end


    const {id} = useParams()
    useEffect(()=>{
        const incomingData = async()=>{
          if(id){
            setLoading(true)
            try{
                const response = await fetch(`https://shop-steel-ten.vercel.app/catagories/${id}`)
                const data = await response.json()
                setShopData(data)
              }catch(error){
                setLoading(false)
                console.log(error)
              }
              setLoading(false)
          }
        }
        incomingData()
    },[id])


    // add cart are start
     const cartData = useSelector((item)=>item?.userData?.addCartData)
     const cartDispatch = useDispatch()
    // add cart are end


    // data increment are start
    const incrementProduct = useDispatch()
    // data increment area end


    // decrement area start
     const shopProductDecrement = useDispatch()
    // decrement area end


    // favrite area start
    const favoriteDispatch = useDispatch()
    // favorite are end


    // price range area start 
    const [priceRange, setPriceRange] = useState(0);

    useEffect(() => {
        const fetchPriceRange = async () => {
            setLoading(true)
        if (priceRange) {
            try {
                const response = await fetch("https://shop-steel-ten.vercel.app/product");
                const product = await response.json();
                const rangeData = product.filter((item) => item?.regularPrice > priceRange);
                setShopData(rangeData)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
    };
    
    fetchPriceRange();
}, [priceRange]);

    // price range area end
    console.log(shopData)
  return (
    <div>
        <div className="all-content mx-8 flex my-4 gap-2">
            <div className="search-area hidden md:block w-[25%] bg-white">
                <div className="item">
                    <div className="title p-6">
                      <FilterTitle className="text-[20px]" title="Product categories"/>
                    </div>
                    <div className="catagory-title flex flex-col gap-4">
                        {
                            catagory.map((item)=>{

                                return(
                                <div key={item?._id} className="content flex items-center mx-10 justify-between">
                                    <div className="title flex items-center gap-1 cursor-pointer">
                                        <input className=" cursor-pointer" 
                                        type="checkbox" 
                                        checked={MdCheckBox === item?._id}
                                        />
                                        <Link onClick={()=>{setCheckBoxData(item?._id);setReciveDataCatagoryBase(item?._base)}} to={`/catagories/${item?._base}`}>{item?.name}</Link>
                                    </div>
                                    <div className="icon">+</div>
                                </div>
                                )
                                }
                            )
                        }
                    </div>
                    {/* prize range are start */}
                    <div className="content my-10 mx-8 ">
                            <div className="prize flex items-center justify-between font-sans font-md font-semibold">
                              <h1 className="m-2">Prize Range</h1>
                              <h1 className="m-2 text-[16px]">Prize : <PrizeFormat price={priceRange}/></h1>
                            </div>
                            <div className="content-body  ">
                               <input onChange={(e)=>setPriceRange(e.target.value)} max="1000" className="w-full placeholder:bg-orange-500" type="range" />
                            </div>
                        <h1>{}</h1>
                    </div>
                    {/* prize range are end */}
                    <Seperator/>
                     
                     {/* brand are start */}
                      <div className="content">
                        <BrandFilter/>
                      </div>
                     {/* brand area end */}
                     
                     {/* ads area start  */}
                      <div className="ads-area">
                         <div className="content">
                            <div className="mx-6">
                               <img className=" w-full h-full" src="https://i.ibb.co/ZXL4fHp/ads-5.png" alt="" />
                            </div>
                         </div>
                      </div>
                     {/* ads area end */}
                </div>
            </div>
            <div className="product-area w-full  md:w-[75%] ">
                <div className="small-device bg-white mb-2 px-4 py-2">
                  <div className="item font-semibold font-sans">Showing 1-16 {shopData?.length} result</div>
                  <div className="item"></div>
                </div>
                {
                loading ?
                 <div className="loader flex justify-center items-center h-screen">
                     <Commet color="#32cd32" size="medium" text="" textColor="" />
                 </div> :
                  <div className="all-item grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                     {
                        shopData.map((item)=>{
                          const existCart = cartData.find((cart)=>cart?.id === item?._id )
                          console.log("exist",existCart)
                         return(  
                         <div key={item._id} className="all-c0ntent bg-white relative overflow-hidden group" >
                                <Link to={`/product/${item?._id}`} className="image">
                                    <img src={item?.images[0]}/>
                                </Link>
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
                                            <div 
                                               onClick={()=>favoriteDispatch(addFavorite({
                                                    image:item?.images,
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
                                        existCart ?
                                        <div>
                                            <IncrementDecrementButton 
                                                quentity={existCart?.quentity} 
                                                incrementData={()=>incrementProduct(productIncrement({id:item?._id }))} 
                                                decrementData={()=>shopProductDecrement(productDecrement({id:item?._id}))}
                                                className="py-1"/>
                                         </div> :
                                        <div
                                          onClick={()=>cartDispatch(addToCart({
                                            image:item?.images,
                                            title:item?.name,
                                            id:item._id,
                                            price:item?.regularPrice,
                                            quentity:1,
                                            productSize:"X"
                                          })) && toast.success("Item added to cart successfully!")}
                                          className="button-area flex gap-4  text-md  py-2 items-center justify-center bg-[#ffa800] hover:bg-orange-700 duration-300">
                                            <p><BsMinecart /></p>
                                            <p className=" font-sans font-semibold">Add To Cart</p> 
                                            <ToastContainer />
                                        </div> 
                                        
                                        }
                                    </div>
                                </div>
                             </div>
                             
                            
                            )
                             
                            }
                        )
                     }
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Shop