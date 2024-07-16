import { Link } from "react-router-dom"


function FlashSell() {
  return (
    <div>
        <div className="content mx-8 md:flex my-8 gap-4">
            <div className="offer md:w-[50%]">
                  <div className=" w-full bg-offerImage overflow-hidden">
                     <div className="offer flex gap-4 justify-between mx-20 mt-20">
                        <div className="days flex flex-col justify-center items-center">
                        <div className="day w-[50px] h-[50px] rounded-full flex justify-center items-center bg-orange-300">0</div>
                        <p className=" font-sans text-lg font-semibold">Days</p>
                        </div>
                        <div className="days flex flex-col justify-center items-center">
                        <div className="day w-[50px] h-[50px] rounded-full flex justify-center items-center bg-orange-300">0</div>
                        <p className=" font-sans text-lg font-semibold">Hour</p>
                        </div>
                        <div className="days flex flex-col justify-center items-center">
                        <div className="day w-[50px] h-[50px] rounded-full flex justify-center items-center bg-orange-300">0</div>
                        <p className=" font-sans text-lg font-semibold">Min</p>
                        </div>
                        <div className="days flex flex-col justify-center items-center">
                        <div className="day w-[50px] h-[50px] rounded-full flex justify-center items-center bg-orange-300">0</div>
                        <p className=" font-sans text-lg font-semibold">sec</p>
                        </div>
                    </div>
                    <div className="wow mx-20 pb-40 my-10">
                        <p className=" text-3xl md:text-3xl lg:text-5xl font-semibold font-sans">Wow flash sell</p>
                        <p className=" underline mt-8 cursor-pointer">Shop Now</p>
                    </div> 
                 </div> 
            </div>
            <div className="plystore md:w-[50%] bg-playStore">
                <div className="all-content m-8 flex flex-col gap-10">
                    <p className=" font-sans font-semibold">Mobile version app</p>
                    <h1 className="text-3xl font-sans font-semibold">
                        Get Our <Link className=" underline text-red-500">Mobile App</Link> 
                       <br /> It’s Make easy for you life !
                    </h1>
                    <div className="logo-area flex md:flex-col lg:flex-row gap-4">
                        <img src="https://i.ibb.co/6gFSxgM/apple-store.png"/>
                        <img src="https://i.ibb.co/bzgzCBy/play-store.png"/>
                    </div>
                    <div className="mobile flex justify-center items-center">
                        <img src="https://i.ibb.co/BVzTgLD/app-screen.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlashSell