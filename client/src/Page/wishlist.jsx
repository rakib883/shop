import { useDispatch, useSelector } from "react-redux"
import HeaderPagenation from "../UI/HeaderPagenation"
import WishListTable from "../UI/Table"
import FoterOffer from "../Component/FoterOffer"
import { resetFavorite } from "../Redux/Slice"



function Wishlist() {
  const favoriteData = useSelector((item)=>item?.userData?.favorite)

  // reset whishlist handeler start
  const resewhishList = useDispatch()
 // reset whishlist area end

  return (
    <div>
        <div className="content">
            <div className="header">
                <HeaderPagenation title="Wishlist"/>
            </div>
            {
              favoriteData.length > 0 ?
                  <div className="main">
                    <div className="header mx-8">
                      <WishListTable wishListDat={favoriteData}  />  
                    </div>
                    <div className="item my-8">
                          <div className="button-area flex justify-end mx-8">
                            <div className="content flex items-center  gap-4 max-w-sm">
                                 <button onClick={()=>resewhishList(resetFavorite())} className="clear cursor-pointer font-sans text-red-600 font-medium">Clean Wishlist</button>
                                 <button className="card bg-[#ffbb38] py-2 px-4 font-sans font-semibold">Add To cart All</button>
                                </div>
                            </div>
                          </div>
                    </div>
                :
               <div className="main">
                  <div className="content">
                     <h1 className="font-semibold text-xl text-center py-8">You have no Wishlist</h1>
                  </div>
               </div>

            }
           <FoterOffer/>
        </div>
    </div>
  )
}

export default Wishlist