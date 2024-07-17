import FilterTitle from "../UI/FilterTitle"
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div>
        <div className="content">
            <div className="title">
                <FilterTitle className="text-[22px] text-[#222222]" title="Contact Information" />
                <p className=" text-[15px] font-semibold font-sans text-[#9199a3]">Fill the form below or write us .We will help you as soon as possible.</p>
            </div>
            <div className="main-content lg:flex gap-6 my-4 ">
                <div className="phone lg:w-[50%] flex justify-center items-center flex-col gap-2 bg-[#ffeae5] py-6">
                    <div className="phone border-2 border-[#ffbb38] rounded-full h-10 w-10 flex justify-center items-center">
                       <MdOutlineWifiCalling3 className="text-3xl cursor-pointer text-[#ffbb38]" />
                    </div>
                    <div className="phone text-[22px] font-semibold  font-sans">Phone</div>
                    <div className="number">
                        <p className=" text-[16px] font-semibold tracking-wider">+0172826000</p>
                        <p className=" text-[16px] font-semibold tracking-wider">+01733250000</p>
                    </div>
                </div>
                <div className="phone lg:w-[50%] mt-4 lg:mt-0 flex justify-center items-center flex-col gap-2 bg-[#d3efff] py-6">
                    <div className="phone cursor-pointer border-2 border-[#ffbb38] rounded-full h-10 w-10 flex justify-center items-center">
                       <MdEmail  className="text-3xl text-[#ffbb38]" />
                    </div>
                    <div className="phone text-[22px] font-semibold  font-sans">Phone</div>
                    <div className="number">
                        <p className=" text-[16px] font-semibold tracking-wider">sheikhrakib883@gmail.com</p>
                        <p className=" text-[16px] font-semibold tracking-wider">rakibsheikh01728@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="location bg-[#e7f2ec]">
                <div className="content p-4">
                    <div className="location flex  gap-4">
                        <div className="phone cursor-pointer border-2 border-[#ffbb38] rounded-full h-10 w-10 flex justify-center items-center">
                          <FaLocationDot  className="text-3xl text-[#ffbb38]" />
                        </div>
                        <div className="location-text ">
                            <h1 className=" text-[22px] font-sans font-semibold">Address</h1>
                            <p className=" font-sans">4517 Washington Ave. Manchester, Road 2342,
                            Kentucky 39495</p>
                        </div>
                    </div>
                    <div className="location-area overflow-hidden my-8">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116813.93650521929!2d90.35323308918638!3d23.803107498081598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1721246717985!5m2!1sen!2sbd" width="100%" height="100%"  loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo