
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pament() {

  // data send area start
    const [cardData, setCardData] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [showFrom, setShowFrom] = useState(false);  
    const cardHandeler = () => {
        fetch("http://localhost:3000/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cardData: cardData,
                cardNumber: cardNumber,
             })
        })
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                toast.success(res.message);
            } else {
                toast.error("Failed to add card");   
                
            }
        })
        .catch(err => {
            toast.error("An error occurred");
            console.error(err);
        });
    };

  // data send area start

  // data faching area start
  const [incomingCart,seIncomingData] = useState([])
     useEffect(()=>{
        fetch("http://localhost:3000/card")
        .then(res=>res.json())
        .then(res=>seIncomingData(res))
     })
  // data fachinga rea end
 

  console.log(incomingCart)

    return (
        <div>
            <ToastContainer />
            <div className="content">
                <div className="ontent mx-3 mt-4">
                    <div className="card">
                        <div className="items">
                            {
                              incomingCart.map((item)=>{
                             
                                const image = item.cardData
                                const finallyImage = JSON.parse(image)
                                console.log(finallyImage.image)
                              
                                return(
                                 <div key={item?._id} className="main-area ">
                                     <div className="content flex justify-between mx-10 items-center my-4">
                                       <div className="image-area ">
                                           <div className="image-content flex gap-4  items-center">
                                                <div className="image bg-[#f2f2f2] flex justify-center items-center w-[120px] h-[120px] rounded-full">
                                                    <img src={finallyImage.image} alt="" />
                                                </div>
                                                <div className="title">
                                                    <p className=" text-[20px] font-sans font-semibold">{finallyImage.name}</p>
                                                    <h1 className=" font-sans text-[14px]">Card {item?.cardNumber}</h1>
                                                    <p className=" text-green-500 font-sans">Verified</p>
                                                </div>
                                           </div>
                                       </div>
                                        <div className="button ">
                                          <button className=" bg-[#ffbb38] px-4 py-2">Manage</button>
                                        </div>
                                     </div>
                                 </div>)
                                 }
                              )
                            }
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="from my-4">
                            {showFrom && (
                                <div className="from flex gap-4 items-center">
                                    <div className="card-item">
                                        <div className="card">
                                            <h1 className="font-sans my-2">Choose your method</h1>
                                            <select 
                                                className="font-sans border py-3 px-2 cursor-pointer outline-none" 
                                                onChange={(e) => setCardData(e.target.value)} 
                                                name="" 
                                                id=""
                                            >

                                                <option value="">Choose method</option>
                                                <option value='{"name": "Datch Bangla Bank Ltd", "image": "https://shopo.quomodothemes.website/assets/images/card-1.svg"}'>Datch Bangla Bank Ltd</option>
                                                <option value='{"name": "Prime Bank", "image": "https://shopo.quomodothemes.website/assets/images/card-2.svg"}'>Prime Bank</option>
                                                <option value='{"name": "Visa Card", "image": "https://shopo.quomodothemes.website/assets/images/card-4.svg"}'>Visa Card</option>
                                                <option value='{"name": "Master Card", "image": "https://shopo.quomodothemes.website/assets/images/card-2.svg"}'>Pay pal</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-number">
                                        <h1 className="font-sans my-2">Enter card number</h1>
                                        <div className="card-area">
                                            <input 
                                                onChange={(e) => setCardNumber(e.target.value)} 
                                                min="8" 
                                                max="12"  
                                                className="px-2 py-3 outline-none border" 
                                                type="text" 
                                                placeholder="Enter your card number" 
                                            />
                                        </div>
                                    </div>
                                    <div className="submit my-2">
                                        <h1 className="my-2 text-white">.</h1>
                                        <div onClick={cardHandeler} className="content">
                                            <button className="bg-black text-white py-3 px-3">Add card</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="button flex gap-4">
                            <div onClick={() => setShowFrom(!showFrom)} className="add bank bg-black text-white font-semibold px-6 py-3">
                                <button className="">Add Card</button>
                            </div>
                            <div className="add bank border text-black border-black font-semibold px-6 py-3">
                                <button className="">Add Bank</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pament;
