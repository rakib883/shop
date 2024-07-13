
import { FaRegStar } from "react-icons/fa";
import PrizeFormat from "./PrizeFormat";
import Title from "./Title";

function TopSelling({topSellData}) {
 
  return (
    <div>
        <div className="content mx-8 my-8">
            <div className="title">
                <Title firstTitle="Top Selling Products"  secendTitle="view more"
                // secendTitle={<Link to="hello">View more</Link>}
                /> 
            </div>
             <div className="dataarea">
                {
                    <div className="product grid md:grid-cols-2 grid-cols-1 gap-4">
                        {
                        topSellData.map((item)=>(
                            <div key={item._id} className="main-area flex py-2 justify-center items-center bg-white">
                                <div className="image w-[50%]">
                                    <div className="image h-[200px] bg-red-800">
                                    <img className="h-full w-full" src={item.images[0]} />
                                    </div>
                                </div>
                                <div className="des w-[50%] flex flex-col md:gap-4">
                                    <div className="rating flex gap-2">
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    <FaRegStar className="text-[#ffbb38] cursor-pointer" />
                                    </div>
                                    <div className="product">
                                        <h1 className=" font-sans font-semibold">{item?.description.substring(0,100)}</h1>
                                    </div>
                                    <div className="price flex items-center gap-2">
                                        <del><PrizeFormat className=" font-sans text-xl font-semibold" price={item?.regularPrice}/></del>
                                        <PrizeFormat className=" font-sans text-xl font-semibold text-red-500" price={item?.discountedPrice}/>
                                    </div>
                                    <div className="order cursor-pointer w-[150px] text-center bg-[#ffbb38] px-4 py-[4px] font-sans font-semibold">
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                }
            </div>   
        </div>
    </div>
  )
}

export default TopSelling