import { MdLocalShipping } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
function Facatelies() {
  return (
    <div>
        <div className="content gap-8 md:gap-0 mx-8 my-4 grid justify-center items-center md:grid-cols-4 bg-white py-8">
           <div className="freshiping md:flex justify-center  gap-4 items-center">
              <div className="icon icon flex md:flex-col justify-center md:justify-start md:items-start items-center">
                 <MdLocalShipping className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils detils detils text-center md:text-start">
                 <p className="font-semibold font-sans">Free Shiping</p>
                 <p className="text-[#797979]">When ordering over $100</p>
              </div>
           </div>
           <div className="freshiping md:flex justify-center  gap-4 items-center">
              <div className="icon  icon flex md:flex-col justify-center md:justify-start md:items-start items-center">
                 <MdOutlineSettingsBackupRestore className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils detils detils text-center md:text-start">
                 <p className="font-semibold font-sans">Free return</p>
                 <p className="text-[#797979]">Get Return within 30 days</p>
              </div>
           </div>
           <div className="freshiping md:flex justify-center  gap-4 items-center">
              <div className="icon icon flex md:flex-col justify-center md:justify-start md:items-start items-center">
                 <SiAwssecretsmanager className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils detils text-center md:text-start">
                 <p className="font-semibold font-sans">Secure pament</p>
                 <p className="text-[#797979]">100% Secure Online Payment</p>
              </div>
           </div>
           <div className="freshiping md:flex justify-center  gap-4 items-center">
              <div className="icon flex md:flex-col justify-center md:justify-start md:items-start items-center">
                 <FaProjectDiagram className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils text-center md:text-start">
                 <p className="font-semibold font-sans">Best qulity</p>
                 <p className="text-[#797979]">Original Product Guarenteed</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Facatelies