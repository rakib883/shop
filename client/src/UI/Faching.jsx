export  const FachingData = async(incomingData)=>{
    try{
        const response = await fetch(incomingData,{
             method:"GET",
             headers:{
                "Content-Type":"application/json"
             }
        })

        if(!response.ok){
            throw new Error("data faching error")
        }

        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}   