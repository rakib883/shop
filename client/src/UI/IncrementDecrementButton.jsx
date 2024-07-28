import { FaPlus } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { clsx } from 'clsx';
function IncrementDecrementButton({incrementData,decrementData,quentity,className}) {
  return (
    <div>
        <div className={` ${className} all-content  rounded-full my-4 border-[1px] border-[#ffbb38]`}>
           <div className="icon flex justify-between items-center mx-4 py-1">
                <div onClick={incrementData} className="increment cursor-pointer"><FaPlus /></div>
                <div  className="quintety font-semibold cursor-pointer">{quentity}</div>
                <div onClick={decrementData} className="decrement cursor-pointer"><GoDash /></div>
           </div>
        </div>
    </div>
  )
}

export default IncrementDecrementButton