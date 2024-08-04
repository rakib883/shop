import { useEffect, useState } from "react"
import Title from "./Title"
import WazWorld from "./WazWorld"
import { MdArrowForwardIos } from "react-icons/md";
import { Commet } from "react-loading-indicators";

function PopulerSale() {
  //  wazworld area start 
  const [pageLoading,setPageloading] = useState(false)
  const [waz,setWaz]= useState([])
  useEffect(()=>{
    setPageloading(true)
     const wazData = async() =>{
       try{
           const response = await  fetch("https://shop-steel-ten.vercel.app/wazworld")
           const data = await response.json()
           setWaz(data)
           setPageloading(false)    
       }catch(error){
           console.log(error)
           setPageloading(false)  
       }
     }
     wazData()
 },[])
//  waz world area end
 const eletronicBanner = [
      {
        "id": 1,
        "name": "Xiaomi",
        "path": "/companies/xiaomi"
      },
      {
        "id": 2,
        "name": "Apple",
        "path": "/companies/apple"
      },
      {
        "id": 3,
        "name": "Google",
        "path": "/companies/google"
      },
      {
        "id": 4,
        "name": "Samsung",
        "path": "/companies/samsung"
      }
  
 ]
  return (
    <div>
      <div className="allcontent ">
          <div className="title mx-8">
             <Title firstTitle="Popular Sales" secendTitle="View More" />
          </div>
          <div className="content">
            {
               pageLoading ? 
              <div className="loader flex justify-center items-center">
                  <Commet color="#32cd32" size="medium" text="" textColor="" />
              </div> : 
                <WazWorld waZdata={waz.slice(4,7)} header="Electronics" foter={<><span>Shop Now</span> <MdArrowForwardIos /></>} bannerImage={"https://i.ibb.co/3FF6Zj5/section-category-2.jpg"} linkItems={eletronicBanner} />
              }
          </div>
      </div>
    </div>
  )
}

export default PopulerSale