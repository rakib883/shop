import { useEffect, useState } from "react"
import Title from "./Title"
import PrizeFormat from "./PrizeFormat"
import { Link } from "react-router-dom"

function PopulerSell() {
    const [newarraval,setNewArraval] = useState([])

    useEffect(()=>{
        const arrvalData = async()=>{
             const response = await fetch("https://shop-steel-ten.vercel.app/product")
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
                             <Link to={`/product/${item?._id}`} className="image h-[100px] w-[100px]">
                                <img src={item?.images[0]}/>
                             </Link>
                             <div className="content">
                                <Link to={`/product/${item?._id}`} ><h1 className=" font-sans font-semibold hover:text-[green] cursor-pointer duration-300">{item?.name.substring(0,30)}</h1></Link>
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