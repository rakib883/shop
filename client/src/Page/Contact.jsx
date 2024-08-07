import ContactInfo from "../Component/ContactInfo"
import FooterTitle from "../Component/FoterTitle"
import FilterTitle from "../UI/FilterTitle"
import InputSearch from "../UI/InputSearch"

function Contact() {
  return (
    <div>
        <div className="content mx-8">
            <div className="title text-center my-8">
                <FilterTitle title="Contact" className="text-[36px]" />
            </div>
            <div className="all-content lg:flex gap-4">
                <div className="info lg:w-[50%]">
                    <ContactInfo/>
                </div>
                <div className="contact lg:w-[50%] bg-white ">
                   <div className="content m-4">
                       <div className="title text-center my-4">
                           <FooterTitle title="Get In Touch" className="text-[34px] font-bold font-sans" />
                           <div className="line mx-8">
                             <div className="border bg-[#ffbe41] h-1 w-full"></div>
                           </div>
                       </div>
                       <div className="from flex flex-col gap-4">
                           <div className="name-area">
                              <InputSearch placeholder="First name" title="First Name" />
                            </div>
                            <div className="name-area">
                              <InputSearch placeholder="First name" title="Email" />
                            </div>
                            <div className="name-area">
                              <InputSearch placeholder="First name" title="Subject" />
                            </div>
                            <div className="message">
                              <h1 className=" text-[13px]">Subject*</h1>
                              <textarea className=" border w-full outline-none px-2" placeholder=" Subject" id="w3review" name="w3review" rows="4" cols="50"/>
                            </div>
                            <div className="button">
                              <button className=" bg-black text-center w-full text-white font-sans font-semibold py-3">Submit</button>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact