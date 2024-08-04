import { useSelector } from "react-redux"
import FilterTitle from "../UI/FilterTitle"
import InputSearch from "../UI/InputSearch"
import { FaUserEdit } from "react-icons/fa";

function PersonalInfo() {
    const userData = useSelector((item)=>item?.userData?.user) 
  return (
    <div>
        <div className="content">
            <div className="name-area mt-10 mx-4 flex gap-2">
                <div className="input-area w-[70%] flex flex-col gap-4">
                    <div className="name flex gap-4">
                        <div className="name-area w-[50%]">
                            <InputSearch  className="" title="First Name" placeholder={userData?.name}/>
                        </div>
                        <div className="name-area w-[50%]">
                            <InputSearch className="" title="Last Name" placeholder="Last Name"/>
                        </div>
                    </div>



                    <div className="email flex gap-4">
                        <div className="name-area w-[50%]">
                            <InputSearch className="" title="Email" placeholder={userData?.email}/>
                        </div>
                        <div className="name-area w-[50%]">
                            <InputSearch className="" title="Phone Number" placeholder="Your phone"/>
                        </div>
                    </div>

                   
                    <div className="Countery">
                        <div className="name-area">
                            <InputSearch className="" title="Countery Name" placeholder="Your Countery"/>
                        </div>
                    </div>

                    <div className="Countery">
                        <div className="name-area">
                            <InputSearch className="" title="Address" placeholder="Address"/>
                        </div>
                    </div>

                   
                    <div className="email flex gap-4">
                        <div className="name-area w-[50%]">
                            <InputSearch className="" title="Town/City" placeholder="Your Town"/>
                        </div>
                        <div className="name-area w-[50%]">
                            <InputSearch className="" title="Zip Code" placeholder="Zip Code"/>
                        </div>
                    </div>

                  <div className="button-area">
                     <button className=" text-red-700 font-sans">Cancel</button>
                     <button className=" bg-black text-white font-sans px-3 mx-6 py-2">Update Profile</button>
                  </div>
                </div>
                <div className="profile-image w-[30%] ">
                    <div className="content mx-4">
                         <div className="title">
                            <FilterTitle title="Update Profile"/>
                            <p>Profile of at least Size300x300. Gifs work too.Max 5mb.</p>
                         </div>
                         <div className="image-area group relative flex justify-center items-center ">
                                <img className="  mt-4 border-2 border-green-600 cursor-pointer rounded-full" src={userData?.image} alt="" />
                                <div className="edit-icin group-hover:block duration-300 cursor-pointer absolute hidden top-[50%]">
                                  <FaUserEdit className=" text-white " />
                                </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo