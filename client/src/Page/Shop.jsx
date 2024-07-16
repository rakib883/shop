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


function Shop() {
    const [loading,setLoading] = useState(false)
    // catagory are start
     const [catagory,setCatagory] = useState([])
     const [MdCheckBox,setCheckBoxData] = useState(0)
     useEffect(()=>{
        const fachingData = async()=>{
            try{
                const catagoryUrl = "http://localhost:3000/catagories"
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
                const catagoryUrl = "http://localhost:3000/product"
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
                const response = await fetch(`http://localhost:3000/catagories/${reciveCatagoryBase}`)
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
                const response = await fetch(`http://localhost:3000/catagories/${id}`)
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

  
  return (
    <div>
        <div className="all-content mx-8 flex my-4 gap-2">
            <div className="search-area hidden md:block w-[25%] bg-white">
                <div className="item">
                    <div className="title p-6">
                      <FilterTitle title="Product categories"/>
                    </div>
                    <div className="catagory-title flex flex-col gap-4">
                        {
                            catagory.map((item)=>
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
                    </div>
                    {/* prize range are start */}
                    <div className="content my-10 mx-8 ">
                            <div className="prize flex items-center justify-between font-sans font-md font-semibold">
                              <h1 className="m-2">Prize Range</h1>
                              <h1 className="m-2">Prize : 235</h1>
                            </div>
                            <div className="content-body  ">
                               <input className="w-full placeholder:bg-orange-500" type="range" />
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

                </div>
            </div>
            <div className="product-area w-full  md:w-[75%] ">
                {
                loading ?
                 <div className="loader flex justify-center items-center h-screen">
                     <Commet color="#32cd32" size="medium" text="" textColor="" />
                 </div> :
                  <div className="all-item grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                     {
                        shopData.map((item)=>
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