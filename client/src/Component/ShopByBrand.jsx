import { useEffect, useState } from "react"
import Title from "./Title"


function ShopByBrand() {
    const [brand,setBrand] = useState([])
   
    useEffect(()=>{
        fetch("http://localhost:3000/brand")
        .then(res=>res.json())
        .then(res=>setBrand(res))
    },[brand])


  return (
    <div>
        <div className="main-content mx-8">
            <div className="header">
               <Title firstTitle="Shop by Brand"/>
            </div>
            <div className="all-logo my-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[2px] ">
                {
                    brand.map((item)=>(
                        <div key={item.id} className="content h-[120px] bg-white  flex justify-center items-center">
                             <img className="" src={item?.brand} alt="brand" />
                        </div>
                        
                     )
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ShopByBrand