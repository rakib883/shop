import { MdLocalShipping } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
function Facatelies() {
  return (
    <div>
        <div className="content mx-8 my-4 grid md:grid-cols-4 bg-white py-8">
           <div className="freshiping flex gap-4 items-center px-6">
              <div className="icon">
                 <MdLocalShipping className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils">
                 <p className="font-semibold font-sans">Free Shiping</p>
                 <p className="text-[#797979]">When ordering over $100</p>
              </div>
           </div>
           <div className="freshiping flex gap-4 items-center">
              <div className="icon">
                 <MdOutlineSettingsBackupRestore className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils">
                 <p className="font-semibold font-sans">Free return</p>
                 <p className="text-[#797979]">Get Return within 30 days</p>
              </div>
           </div>
           <div className="freshiping flex gap-4 items-center">
              <div className="icon">
                 <SiAwssecretsmanager className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils">
                 <p className="font-semibold font-sans">Secure pament</p>
                 <p className="text-[#797979]">100% Secure Online Payment</p>
              </div>
           </div>
           <div className="freshiping flex gap-4 items-center">
              <div className="icon">
                 <FaProjectDiagram className="text-5xl text-[#ffbb38]" />
              </div>
              <div className="detils">
                 <p className="font-semibold font-sans">Best qulity</p>
                 <p className="text-[#797979]">Original Product Guarenteed</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Facatelies