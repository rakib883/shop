import bigBanner from "../assets/banner-1.2.png"
import firstsmall from "../assets/banner-2.png"
import secendSmall from "../assets/banner-3.png"
function Banner() {
  return (
    <div>
        <div className="main-area my-4">
            <div className="content md:flex gap-4  mx-8">
                <div className="big-items w-full md:w-[70%] ">
                    <div className="image h-full ">
                        <img className="h-full w-full" src={bigBanner} alt="banner"/>
                    </div>
                </div>
                <div className="small mt-4 md:mt-0 w-full md:w-[30%] flex md:flex-col gap-4 ">
                    <div className="smal ">
                        <div className="image ">
                            <img className="h-full w-full" src={firstsmall} alt="banner"/>
                        </div>
                    </div>
                    <div className="small  ">
                        <div className="image  ">
                            <img className="h-full w-full" src={secendSmall} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner