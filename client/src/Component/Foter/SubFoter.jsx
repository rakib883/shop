
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import pament from "../../assets/payment-getways.png"
function SubFoter() {
  return (
    <div>
        <div className="content mx-8 py-4 md:flex justify-between">
             <div className="flex gap-6 items-baseline">
                <div className="social social flex gap-4 text-[#797979] text-[16px]">
                   <FaInstagram />
                   <FaFacebookF />
                   <FaYoutube />
                </div>
                <p>©2022QuomodosoftAll rights reserved</p>
             </div>
             <div className="pament">
               <div className="pament">
                 <img src={pament}/>
               </div>
             </div>
        </div>
    </div>
  )
}

export default SubFoter