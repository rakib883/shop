import { useEffect } from "react"
import FilterTitle from "../UI/FilterTitle"
import { FachingData } from "../UI/Faching"
import { useState } from "react"
import { Link } from "react-router-dom"

function BrandFilter() {
  //  filter data fching are start
  const [databarand,setDataBrand] = useState([])
  useEffect(()=>{
    const incoomingData  = async()=>{
      try{
         const response = await FachingData("http://localhost:3000/product")
         setDataBrand(response)
      }catch(error){
        console.log(error)
      }
    }
    incoomingData()
  },[])
  // filter faching are data end

  return (
    <div>
        <div className="content mx-8">
            <div className="title">
                <FilterTitle title="Brands"/>
            </div>
            <div className="main-items">
                {/* {
                  databarand.map((item)=>
                    <div key={item?._id} className="main">
                         <Link >{item?.brand}</Link>
                    </div>
                  )
                } */}
            </div>
        </div>
    </div>
  )
}

export default BrandFilter