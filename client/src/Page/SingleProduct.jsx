import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FachingData } from "../UI/Faching"

function SingleProduct() {

    const {id} = useParams()
    const [singleData,faceSingleData] = useState()
    const incomingData = `http://localhost:3000/product/${id}`
    useEffect(()=>{
       const faceData = async()=>{
            try{
                const response = await FachingData(incomingData)
                faceSingleData(response)
            }catch(error){
              console.log(error.message)
            }finally{
               console.log("data not found")
            }
       }
       faceData()
    },[incomingData])
  return (
    <div>
       <div className="content m-8">
           <div className="items flex gap-4">
              <div className="image w-[50%]">
                 <img src={singleData.images[0]} alt="img" />
              </div>
              <div className="descprtion w-[50%]">
                <div className="content">
                  dfgdfgdgd
                </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default SingleProduct