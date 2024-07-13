import bigBanner from "../assets/banner-1.2.png"
import firstsmall from "../assets/banner-2.png"
import secendSmall from "../assets/banner-3.png"
function Banner() {
  return (
    <div>
        <div className="main-area my-4">
            <div className="content grid grid-rows-4 grid-flow-col gap-4 mx-8">
                <div className="big-items row-span-4 col-span-9 bg-red-900 ">
                    <div className="image h-full w-full">
                        <img className="h-full w-full" src={bigBanner} alt="banner"/>
                    </div>
                </div>
                <div className="smal col-span-3 row-span-2 ">
                    <div className="image h-full w-full">
                        <img className="h-full w-full" src={firstsmall} alt="banner"/>
                    </div>
                </div>
                <div className="small col-span-3 row-span-2 ">
                    <div className="image  h-full w-full">
                        <img className="h-full w-full" src={secendSmall} alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner