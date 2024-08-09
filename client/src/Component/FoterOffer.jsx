import { MdOutlineEmail } from "react-icons/md";
function FoterOffer() {
  return (
    <div>
        <div className="content">
            <div className="content bg-foterDiscount">
                <div className="all-contente max-w-xl mx-auto">
                    <div className="text-area py-20">
                        <div className="text text-center ">
                            <h1 className=" font-sans text-xl md:text-3xl font-bold">Get 20% Off Discount Coupon</h1>
                            <p className=" font-sans  md:text-lg font-semibold">by Subscribe our Newsletter</p>
                        </div>
                        <div className="search mx-4 flex justify-center items-center my-6 bg-slate-50">
                            <MdOutlineEmail className="w-[10%] font-sans text-xl px-2" />
                            <input className="w-[60%] outline-none md:placeholder:text-base placeholder:text-[12px] text-[14px] font-sans border-none  bg-slate-50" type="text" name="" id="" placeholder="Your gmail" />
                            <button className="w-[30%] bg-[#ffbb38]  md:py-4 font-sans md:text-md font-semibold py-1 md:text-base text-[12px]">Get The Cupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoterOffer