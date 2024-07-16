import { useEffect, useState } from "react"
import Title from "./Title"
import PrizeFormat from "./PrizeFormat"

function PopulerSell() {
    const [newarraval,setNewArraval] = useState([])

    useEffect(()=>{
        const arrvalData = async()=>{
             const response = await fetch("http://localhost:3000/product")
             const data = await response.json()
             setNewArraval(data)
        }
        arrvalData()
    },[])
    
  return (
    <div>
        <div className="all-content mx-8">
            <div className="title">
              <Title firstTitle="Popular Sales" secendTitle="View More"/>
            </div>
            <div className="content grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[1px]">
                {
                    newarraval.slice(0,15).map((item)=>
                      <div key={item._id} className="main bg-white cursor-pointer ">
                          <div className="all-content flex justify-center items-center">
                             <div className="image h-[100px] w-[100px]">
                                <img src={item?.images[0]}/>
                             </div>
                             <div className="content">
                                <h1 className=" font-sans font-semibold hover:text-green-900 cursor-pointer">{item?.name.substring(0,30)}</h1>
                                <div className="prize-area flex gap-2 items-center">
                                    <del><PrizeFormat className=" font-semibold text-sm" price={item?.regularPrice}/></del>
                                    <PrizeFormat className=" font-semibold text-lg text-red-800" price={item?. discountedPrice}/>
                                </div>
                             </div>
                          </div>
                      </div>
                    
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default PopulerSell