import { Link,} from "react-router-dom"
import logog from "../assets/logo.svg"
import { FaRegUser } from "react-icons/fa6";
 import { LiaShoppingBagSolid } from "react-icons/lia";
 import { CiHeart } from "react-icons/ci";
 import { LuRefreshCw } from "react-icons/lu";
 import { FaBarsStaggered } from "react-icons/fa6";
 import { HiOutlineXMark } from "react-icons/hi2";
 import { FiRefreshCcw } from "react-icons/fi";
 import { IoIosSearch } from "react-icons/io";
 import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import FilterTitle from "../UI/FilterTitle";
import { PiSignInFill } from "react-icons/pi";
import { motion } from "framer-motion"
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import app from "../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, singleItemRemove } from "../Redux/Slice";
import PrizeFormat from "./PrizeFormat";





function MainHeader() {
  // menu catagory area start
   const [catagoryOpen,setcatagoryItems] = useState(true)
  // menu catagory are end

  // catagory data faching area start
  const [catagory,setCatagory] = useState([])
   useEffect(()=>{
      const fetchData = async()=>{
       try{
         const response = await fetch("https://shop-steel-ten.vercel.app/catagories")
         const data = await response.json()
         setCatagory(data)
       }catch(error){
        console.log(error)
       }
      }
      fetchData()
   },[])
  // catagory data faching area end
  

  // main mobile menu  area start 
  const menu = [
    {name :"Home",path:"/"},
    {name :"Shop",path:"/shop"},
    {name :"About",path:"/about"},
    {name :"Blog",path:"/blog"},
    {name :"Contact",path:"/contact"},
]
  // main mobile menu are end

  // mobile menu click handeler start
     const [catagoryHandeler,setCatagoryHandeler] = useState(false)
  // mobile menu click handeler end

  // user profile area start
   const [userArea,setUserArea] = useState(false)
  // user profile area end

  // register handeler area start
  const [registerHandeler,setRegisterHandeler] = useState(true)
  // regoster handeler area end


// user auth area start
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const [user,setUser] = useState(false)





const googleHandler = () => {
  setUserArea(false)
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      
      console.log(result.user)
      
      setUser(true)
      dispatch(addUser({
        name:result?.user?.displayName,
        email:result?.user?.email,
        image:result?.user?.photoURL
      }))

      // setTimeout(()=>{
      //   navagete("/shop")
      // },1500)
     
      // Handle user data, e.g., save it to state or local storage
    })
    .catch((error) => {
      console.error("Error during sign-in with Google:", error);
      // Handle error appropriately
    });
};




// user auth area end
  const dispatch = useDispatch()
  const profileData = useSelector((state)=>state?.userData?.user)

  // user area end



  {/* addcart area start */}
   const cartSelector = useSelector((state)=>state?.userData?.addCartData)
  
   const [totalPrice,setTotalPrice] = useState(12)
   cartSelector.map((item)=>item?.price )
    useEffect(()=>{
      let price = 0
      cartSelector.map((item)=>{
         price += item?.price * item?.quentity
      })
      setTotalPrice(price)
    },[cartSelector])


    console.log("dgdfgdg",totalPrice)
    const singleCartDataRemove = useDispatch()



    const[cartItem,setCartItem] = useState(false)
  {/* add cart area end */}
  


  // favorite area start
  const favoriteData = useSelector((item)=>item?.userData?.favorite)
  // favorite area end
  return (
    <div className="bg-white sticky top-0 z-50 shadow-xl">
       {/* login system are start */}
          { 
           userArea &&
          <div className="center0popup   absolute top-0 w-full h-screen z-40">
              <div className="main-items max-w-lg  md:max-w-xl mx-auto h-screen flex flex-col gap-y-4 justify-center items-center">
                  <motion.div
                       initial={{ y: "100%" }}
                       animate={{ y: userArea ? "0%" : "100%" }}
                       transition={{ duration: .5, ease: "easeInOut" }}
                       className={` bg-indigo-500   p-4 w-full md:flex items-center gap-4 `}>



                    
                    <div onClick={()=>setUserArea(false)} className="xmark absolute top-[-15px] right-[-10px] cursor-pointer bg-white rounded-full drop-shadow-4xl">
                        <HiOutlineXMark className=" text-2xl" />
                    </div>
                    <div className="image-area md:w-[50%] hidden md:block">
                      <div className="image">
                         <img className="h-full w-full " src="https://i.ibb.co/VVTqgX4/Screenshot-2024-07-24-172143.png" alt="" />
                      </div>
                    </div>
                    {
                      registerHandeler ?
                      <div className="from w-full  md:w-[50%] flex justify-center items-center">
                       <div className="all-content my-4">
                           <div className="title flex justify-center items-center">
                              <FilterTitle className="text-white" title="Wellcome to our Shop"/>
                           </div>
                           <div className="input-area w-full flex flex-col gap-2 my-2">
                              <div className="email w-full">
                                  <input type="text" placeholder="Inter your email" className="px-2 outline-none border-none rounded-md p-1 w-full" />
                              </div>
                              <div className="password">
                                <input type="text" placeholder="Inter your password" className=" px-2 outline-none border-none p-1 rounded-md w-full" />
                              </div>
                              <div className="check text-white text-[12px] flex justify-between">
                                  <div className="check flex gap-2 items-center cursor-pointer">
                                    <input type="checkbox" name="" id="" className=" cursor-pointer" /> <h1>Remember Me</h1>
                                  </div>
                                  <div className="forget">
                                     <h1 className=" font-sans">Forget Password ?</h1>
                                  </div>
                              </div>
                              <div className="button flex justify-center items-center font-sans">
                                <button className="flex items-center rounded-md bg-white text-[16px] px-4 py-2"> Sign in <PiSignInFill className=" mt-1 text-2xl" /></button>
                              </div>
                              <div className="register text-[12px] font-sans">You have dont account / <span onClick={()=>setRegisterHandeler(false)} className="text-white cursor-pointer hover:text-indigo-900">Register now</span>  </div>
                           </div>
                       </div>
                    </div>
                    :
                    <div className="register md:w-[50%] ">
                        <div className="title flex justify-center items-center text-center w-full">
                          <FilterTitle className="text-white" title="Register now"/>
                        </div>
                            <div className="main">
                              <div className="register">
                                <div className="email">
                                  <h1 className=" mx-1 font-sans text-white">Email</h1>
                                  <div className="input-area my-1">
                                    <input className=" w-full outline-none border-none p-1 px-2 rounded-md" type="text" placeholder="Inter your email" />
                                  </div>
                              </div>
                              <div className="email">
                                  <h1 className=" mx-1 font-sans text-white">Password</h1>
                                  <div className="input-area my-1">
                                    <input className=" w-full outline-none border-none p-1 px-2 rounded-md" type="text" placeholder="Inter password" />
                                  </div>
                              </div>
                              <div className="email">
                                  <h1 className=" mx-1 font-sans text-white">Retype Password</h1>
                                  <div className="input-area my-1">
                                    <input className=" w-full outline-none border-none p-1 px-2 rounded-md" type="text" placeholder="Inter retype password" />
                                  </div>
                              </div>
                              <div className="create-account bg-indigo-600 rounded-md my-2 text-white text-center">
                                <button className="py-1 font-sans ">Create account</button>
                              </div>
                            </div>
                            <div className="login text-center cursor-pointer text-white">
                                <h1 onClick={()=>setRegisterHandeler(true)} className=" hover:text-indigo-800">Login now</h1>
                             </div>
                            <div className="social-area">
                               <div className="seperator flex items-center gap-2">
                                   <div className="border w-full h-[1px] bg-black"></div>
                                   <div className="text">OR</div>
                                   <div className="border w-full h-[1px] bg-black"></div>
                               </div>
                               <div className="social flex justify-center items-center my-4 gap-4 text-white">
                                   <div onClick={googleHandler} className="facebook cursor-pointer bg-black rounded-full h-8 w-8 flex justify-center items-center">
                                     <FaGoogle />
                                   </div>
                                   <div className="facebook cursor-pointer bg-black rounded-full h-8 w-8 flex justify-center items-center">
                                     <FaFacebookF />
                                   </div>
                                    
                               </div>
                            </div>
                         </div>
                      </div>

                    } 
                  </motion.div>
              </div>
          </div>
          }
          {/* login system area end */}
          
 

      





        <div className="main-content mx-8 flex  items-center py-6">
            <div className="logo-area w-[30%]">
                <div className="image-area">
                  <FaBarsStaggered onClick={()=>setCatagoryHandeler(true)} className=" block  md:hidden text-xl cursor-pointer" />
                  {/* mobile menu area start */}
                   <div className={`mobile-menu ${ catagoryHandeler ? "left-0 duration-300" :"left-[-600px] duration-300" }  bg-white w-[80%] shadow-xl absolute top-0 shadow-xl md:hidden z-50`}>
                      <div className="main-items mx-4">
                          <div className="header flex justify-between items-center my-4">

                            <div className="menu flex items-center gap-6">
                               <div className=" cursor-pointer relative">
                                   <FaRegHeart className="text-2xl" />
                                    <div className="text absolute flex justify-center items-center bg-[#ffbb38] w-4 h-4 rounded-full top-[-5px] right-[-12px]">
                                      <p className=" text-base">0</p>
                                    </div>
                                </div>
                                <div className=" cursor-pointer relative">
                                   <FiRefreshCcw  className="text-2xl" />
                                    <div className="text absolute flex justify-center items-center bg-[#ffbb38] w-4 h-4 rounded-full top-[-5px] right-[-12px]">
                                      <p className=" text-base ">10</p>
                                    </div>
                                </div>
                                <div onClick={()=>{setUserArea(true),setCatagoryHandeler(false) }} className="user cursor-pointer">
                                   <FaRegUserCircle className=" text-2xl" />
                                </div>
                            </div>


                            <div onClick={()=>{
                                   setCatagoryHandeler(false) 
    
                                  }} className="cross-icon bg-red-600 cursor-pointer rounded-full h-8 w-8 flex justify-center items-center">
                               <HiOutlineXMark className=" text-2xl" />
                            </div>
                          </div>


                          <div className="mobile-sear my-4">
                              <div className="main-area bg-white flex items-center border">
                                 <input className="text-md placeholder:font-sans px-2 outline-none border-none w-[80%] " type="text" placeholder="Seach..." />
                                 <div className="icon cursor-pointer py-1 bg-[#ffbb38] w-[20%] flex justify-center items-center">
                                   <IoIosSearch className="text-xl font-bold " />
                                 </div>
                              </div>
                          </div>

                          {/* mobile menu catagory header start */}
                          <div className="main">
                            <div className="content mx-4">
                              <div className="header flex justify-between items-center">
                                 <h1 onClick={()=>setcatagoryItems(true)} className="font-sans font-semibold cursor-pointer">Catagory</h1>
                                 <h1 onClick={()=>setcatagoryItems(false)} className="font-sans font-semibold cursor-pointer">Main Menu</h1>
                              </div>
                              {/* main catagory item start */}
                                 <div className="">
                                  {
                                    catagoryOpen ?
                                   <div className="catagory">
                                     <div className="items flex flex-col gap-2">
                                        {
                                          catagory.map((item)=>
                                            <Link onClick={()=>setCatagoryHandeler(false)} to={`/catagories/${item?._base}`} key={item._id} className="main-items flex items-center gap-2 py-2">
                                                 <div className="list-image-none h-6 w-6 rounded-full">
                                                    <img className=" h-full w-full rounded-full" src={item?.image} alt="catagory" />
                                                 </div>
                                                 <div className="text">
                                                   {item?.name}
                                                 </div>
                                            </Link>
                                          )
                                        }
                                     </div>
                                   </div>
                                   :
                                   <div className="menu flex flex-col gap-2 my-4 ">
                                     {
                                       menu.map((item)=>
                                         <Link onClick={()=>setCatagoryHandeler(false)} to={item?.path} key={item?.id} className="main font-sans font-semibold ">
                                            {item?.name}
                                         </Link>
                                      ) 
                                     }
                                   </div>
                                   }
                                 </div>
                              {/* main catagory end */}
                            </div>
                          </div>
                          {/* mobile menu catagory header end */}

                      </div>
                   </div>

                   {/* mobile menu are end */}
                   <Link className="hidden md:block" to="/">
                     <img className="h-10 w-40" src={logog} />
                   </Link>
                </div>
            </div>
            <div className="search-area w-[40%]">
                {/* mobile items start */}
                   <Link className="md:hidden flex justify-center items-center" to="/">
                     <img className="h-10 w-40" src={logog} />
                   </Link>
                {/* mobile items end */}
                <div className="all-content md:flex md:justify-between justify-center items-center border hidden md:block    ">
                     <div className="w-[50%] relative customSideBorder">
                        <input className=" lg:w-[80%]  px-2 outline-none border-none bg-white" type="text" placeholder="Search" />
                     </div>
                     <div className="dropdown w-[40%] cursor-pointer hidden lg:block ">
                       <p>Select Catagory</p>
                     </div>
                     <div className="w-[20%] cursor-pointer py-2 text-center font-MainFont font-semibold bg-[#ffbb38]">
                        <button className=" font-sans">Search</button>
                     </div>
                    
                </div>
            </div>
            <div className="profile w-[30%] flex  justify-end">
                <div className="content flex gap-6 items-center">
                   <div className="user cursor-pointer relative hidden md:block">
                         <LuRefreshCw className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">{favoriteData?.length}</p>
                    </div>
                   <Link to="/wishlist" className="user cursor-pointer relative hidden md:block">
                         <CiHeart className="text-2xl" />
                         <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">{favoriteData?.length}</p>
                    </Link>
                    
                    {/* desktop cart area start */}
                    <div className="user cursor-pointer relative ">

                       <Link to="/cart" onMouseEnter={()=>setCartItem(true)} onMouseLeave={()=>setCartItem(false)} className="main-content">
                            <LiaShoppingBagSolid className="text-2xl" />
                            <p className=" absolute top-[-10px] right-[-10px] flex justify-center items-center bg-[#ffbb38] rounded-full w-5 h-5">{cartSelector?.length}</p>
                        </Link>
                         {
                          cartItem &&
                         <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: userArea ? "100%" : "10%" }}
                            transition={{ duration: .5, ease: "easeInOut" }}


                            onMouseEnter={()=>setCartItem(true)} onMouseLeave={()=>setCartItem(false)}
                            className="hidenItems bg-white drop-shadow-2xl absolute w-[300px] snap-none right-[-15px] mt-0">
                           <div className="top-border bg-[#ffbb38] h-[2px]"></div>
                           {/* main-content-area start */}
                           <div className="content mx-2 py-2">
                              <div className="cartitems  max-h-[200px] overflow-auto">
                                 {
                                   cartSelector.map((item)=>
                                      <div key={item.id} className="main-item flex justify-between items-center border-b-orange-400">
                                           <div className="image flex items-center">
                                              <div className="image w-20 h-20">
                                                  <img src={item?.image[0]} alt="" />
                                              </div>
                                              <div className="title">
                                                  <h1>{item?.title.substring(0,20)}</h1>
                                                  <p className="text-red-800"><PrizeFormat price={item?.price}/></p>
                                              </div>
                                           </div>
                                           <div 
                                             onClick={()=>singleCartDataRemove(singleItemRemove({
                                              id:item?.id
                                             }))}
                                           className="cross mx-4 ">
                                             <HiOutlineXMark className=" text-2xl" />
                                           </div>
                                      </div>
                                  
                                    )
                                 }
                              </div>
                              
                                <div className="cart-button">
                                  {
                                    cartSelector.length > 0 ?
                                    <div className="main mx-8">
                                        <div className="title flex py-4 justify-between font-sans font-semibold">
                                          <h1>Total</h1>
                                          <h1><PrizeFormat price={totalPrice}/></h1>
                                        </div>
                                        <div className="button flex gap-2 flex-col my-4">
                                          <button className=" bg-gray-400 font-semibold text-white font-sans py-2">View Cart</button> 
                                          <button  className=" bg-[#ffbb38] py-2 font-sans text-black font-semibold">Check Out Now</button>
                                        </div>
                                        <p className=" text-center py-2 font-sans">Get Return 30 days</p>
                                    </div>:
                                    <div className="nodata text-center font-sans text-lg font-semibold">
                                       You Cart is Empety
                                    </div>
                                 }
                                </div>
                           </div>
                           {/* main content are end */}
                         </motion.div>
                         }
                    </div>
                    {/* desktop cart are end */}




                    
                    <div className="profile cursor-pointer">
                      {
                        user ?
                        <div className="user-items">
                          <Link to="user/profile" className="image ">
                              <img className=" rounded-full h-10 w-10" src={profileData?.image}  alt="profile" />
                          </Link>
                        </div> 
                          :
                          <div 
                            onClick={() => setUserArea(true)} 
                            className="user cursor-pointer relative hidden md:block"
                          >
                            <FaRegUser className="text-2xl" />
                          </div>
                      }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader