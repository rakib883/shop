import { Link } from "react-router-dom"
import FooterTitle from "../FoterTitle"
import FoterTitle from "../FoterTitle"

function MainFoter() {
  const foterFeture = [
    {name:"about us",path:"/aboutus"},
    {name:"Terms Condition",path:"/termscondition"},
    {name:"Best Products",path:"/bestproducts"},
  ]

  const foterGenaral = [
    {name:"blog",path:"blog"},
    {name:"Tracking order",path:"tracking-order"},
    {name:"Become seller",path:"become-seller"},
  ]

  const helpFull = [
    {name:"Flash sell",path:"/flashs-sell"},
    {name:"FAQ",path:"/faq"},
    {name:"Support",path:"/support"},
  ]
  return (
    <div>
      <div className="mx-8 border-t-[1px] py-4 border-b-[1px] grid md:grid-cols-4 lg:grid-cols-4 ">
         <div className="abot">
            <div className="title">
               <FoterTitle title="About Us"/>
            </div>
            <div className="pragraph max-w-[200px] text-[#9e9fa7] font-sans">
               We know there are a lot of threa developers our but we pride into a firm in the industry.
            </div>
         </div>
         <div className="feture">
           <div className="title">
               <FoterTitle className="" title="Feture"/>
           </div>
           <div className="body flex flex-col gap-2 font-sans text-[#9e9fa7]">
            {
              foterFeture.map((item)=>(
                <Link className="" to={item.path} key={item.name}>{item.name}</Link>
              ))
            }
           </div>
         </div>
         <div className="genaral">
           <div className="title">
             <FooterTitle className="" title="Genaral link" />
           </div>
           <div className="body flex flex-col gap-2 font-sans text-[#9e9fa7]">
            {
              foterGenaral.map((item)=>(
                <Link className="" to={item.path} key={item.name}>{item.name}</Link>
              ))
            }
           </div>
         </div>
         <div className="helpful">
           <div className="title">
             <FooterTitle className="" title="helpfull" />
           </div>
           <div className="body flex flex-col gap-2 font-sans text-[#9e9fa7]">
            {
              helpFull.map((item)=>(
                <Link className="" to={item.path} key={item.name}>{item.name}</Link>
              ))
            }
           </div>
         </div>
      </div>
    </div>
  )
}

export default MainFoter