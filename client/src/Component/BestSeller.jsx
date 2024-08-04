import { useEffect, useState } from "react"
import Title from "./Title"

function BestSeller() {
  const [seller,setSeller] = useState([])
   useEffect(()=>{
      fetch("https://shop-steel-ten.vercel.app/bestseller")
      .then(res=>res.json())
      .then(res=>setSeller(res))
   },[seller])
        
  return (
    <div>
        <div className="content mx-8 ">
            <Title firstTitle="Best Seller"/>
            <div className="seller grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center items-center">
              {
                seller.map((item)=>
                 <div key={item.id} className="main flex items-center flex-col gap-2 ">
                       <div  className="main-content rounded-full bg-white  flex justify-center items-center w-[180px] h-[180px]">
                          <img src={item?.url}/>
                      </div>
                      <p className="text-lg font-sans font-semibold">{item?.name}</p>
                 </div>
                )
              }
        </div>
        </div>
    </div>
  )
}

export default BestSeller