import samsungAds from "../../public/ads-1.png"
import headphone from "../../public/ads-2.png"

function Ads() {
  return (
    <div>
        <div className="content mx-8 my-8">
            <div className="first flex md:flex-row flex-col gap-4 ">
                <div className="sam w-full">
                    <img className="w-full" src={samsungAds}/>
                </div>
                <div className="had w-full">
                   <img className="w-full" src={headphone}/>
                </div>
            </div>
            <div className="secend"></div>
        </div>
    </div>
  )
}

export default Ads