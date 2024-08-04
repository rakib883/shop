import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { MdWifiProtectedSetup } from "react-icons/md";
import FilterTitle from "../UI/FilterTitle";
import { useSelector } from "react-redux";


function DashBord() {
    const userData = useSelector((item)=>item?.userData?.user)
    console.log(userData)
  return (
    <div>
        <div className="main mt-14">
            <div className="content mx-4">
                <dsiv className="title font-sans font-semibold text-xl">
                    <p>Hello {userData?.name}</p>
                    <p className="text-lg">Wellcome your profile</p>
                </dsiv>
                <div className="statas grid  grid-cols-3 gap-4 my-4">
                    <div className="content py-4 hover:bg-[#ffbb38] rounded-sm duration-300  cursor-pointer bg-black">
                         <div className="item  w-[60px] rounded-sm m-6 h-[60px] bg-white flex justify-center items-center">
                            <MdOutlineLocalGroceryStore className=" text-black  text-[35px]" />
                         </div>
                         <div className="text-area text-white m-4 text-2xl font-sans">
                            <h1 className="font-sans font-semibold">New order</h1>
                            <h1 className="font-sans font-semibold">365</h1>
                         </div>
                    </div>
                    <div className="content py-4 hover:bg-[#ffbb38] rounded-sm duration-300  cursor-pointer bg-black">
                         <div className="item  w-[60px] rounded-sm m-6 h-[60px] bg-white flex justify-center items-center">
                            <GrDeliver className=" text-black  text-[35px]" />
                         </div>
                         <div className="text-area text-white m-4 text-2xl font-sans">
                            <h1 className="font-sans font-semibold">Shifting</h1>
                            <h1 className="font-sans font-semibold">144</h1>
                         </div>
                    </div>
                    <div className="content py-4 hover:bg-[#ffbb38] rounded-sm duration-300  cursor-pointer bg-black">
                         <div className="item  w-[60px] rounded-sm m-6 h-[60px] bg-white flex justify-center items-center">
                            <MdWifiProtectedSetup className=" text-black  text-[35px]" />
                         </div>
                         <div className="text-area text-white m-4 text-2xl font-sans">
                            <h1 className="font-sans font-semibold">Processing order</h1>
                            <h1 className="font-sans font-semibold">365</h1>
                         </div>
                    </div>
                </div>
            </div>

              {/* dash bord bottom area end */}
              <div className="dash-bord-content mx-4 my-4">
                 <div className="main-content bg-[#f8f8f8]">
                    <div className="item mx-10 flex gap-4">
                        {/* address area start */}
                        <div className="address w-[50%]">
                            <div className="titel">
                                <FilterTitle className="text-[22px]" title="Parsonal Information"  />
                            </div>
                            <div className="content my-4">
                                <table className=" w-full" >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className=" font-sans text-[16px] font-semibold">
                                        <tr className="">
                                            <td className="py-2">Name :</td>
                                            <td className="py-2">{userData?.name}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Email :</td>
                                            <td className="py-2">{userData?.email}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Phone:</td>
                                            <td className="py-2">01728262111</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">City:</td>
                                            <td className="py-2">Dhaka</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Zip :</td>
                                            <td className="py-2">8141</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* addressa area end */}

                        {/* shop address area start */}
                         <div className="shop-area w-[50%]">
                           <div className="titel">
                                <FilterTitle className="text-[22px]" title="Shop Inforamtion"  />
                            </div>
                            <div className="content my-4">
                                <table className=" w-full" >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className=" font-sans text-[16px] font-semibold">
                                        <tr className="">
                                            <td className="py-2">Name :</td>
                                            <td className="py-2">{userData?.name}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Email :</td>
                                            <td className="py-2">{userData?.email}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Phone:</td>
                                            <td className="py-2">01728262111</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">City:</td>
                                            <td className="py-2">Dhaka</td>
                                        </tr>
                                        <tr className="">
                                            <td className="py-2">Zip :</td>
                                            <td className="py-2">8141</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                         </div>
                        {/* shop area addressa  end */}
                    </div>
                 </div>
              </div>
              {/* dash bord bottom are end */}



        </div>
    </div>
  )
}

export default DashBord