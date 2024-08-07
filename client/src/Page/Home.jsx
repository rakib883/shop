import { useEffect, useState } from "react"
import Banner from "../Component/Banner"
import Facatelies from "../Component/Facatelies"
import FlashSell from "../Component/FlashSell"
import ShopByBrand from "../Component/ShopByBrand"
import TopSelling from "../Component/TopSelling"
import WazWorld from "../Component/WazWorld"
import { BiEuro } from "react-icons/bi"
import BestSeller from "../Component/BestSeller"
import Ads from "../Component/Ads"
import PopulerSale from "../Component/PopulerSale"
import HadesPhoneAds from "../Component/HadesPhoneAds"
import NewArrival from "../Component/NewArrival"
import PopulerSell from "../Component/PopulerSell"
import FoterDiscount from "../Component/FoterDiscount"
import FoterOffer from "../Component/FoterOffer"

function Home() {
//  wazworld area start 
  const [waz,setWaz]= useState([])
 useEffect(()=>{
      fetch("https://shop-steel-ten.vercel.app/wazworld")
          .then(res=>res.json())
          .then(res=>setWaz(res))
 },[])
//  waz world area end


// top selling product are start

    const [topSelling,setTopSelling] = useState([])
    useEffect(()=>{
      fetch("https://shop-steel-ten.vercel.app/wazworld")
      .then(res=>res.json())
      .then(res=>setTopSelling(res))
    },[topSelling])
// top selling product are end
  return (
    <div>
        <Banner/>
        <Facatelies/>
        <WazWorld  waZdata={waz.slice(0,3)} bannerImage={"https://i.ibb.co/XbvrVxK/section-category-1.jpg"} />
        <ShopByBrand/>
        <FlashSell/>
        <TopSelling topSellData={topSelling.slice(3,7)}/>
        <BestSeller/>
        <Ads/>
        <PopulerSale/>
        <HadesPhoneAds/>
        <NewArrival/>
        <PopulerSell/>
        <FoterDiscount/>
        <FoterOffer/>
    </div>
  )
}

export default Home