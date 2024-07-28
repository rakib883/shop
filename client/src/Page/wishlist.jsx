import { useSelector } from "react-redux"
import HeaderPagenation from "../UI/HeaderPagenation"
import WishListTable from "../UI/Table"




function Wishlist() {
  const favoriteData = useSelector((item)=>item?.userData?.favorite)
  return (
    <div>
        <div className="content">
            <div className="header">
                <HeaderPagenation title="Wishlist"/>
            </div>
            {
              favoriteData.length > 0 ?
                <div className="header mx-8">
                  <WishListTable wishListDat={favoriteData}  />  
                </div>
               :
               <div className="main">
                  <div className="content">
                     <h1 className="font-semibold text-xl text-center py-8">You have no Wishlist</h1>
                  </div>
               </div>

            }
           
        </div>
    </div>
  )
}

export default Wishlist