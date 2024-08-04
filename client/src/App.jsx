import { Outlet } from "react-router-dom"
import TopHeader from "./Component/TopHeader"
import MainHeader from "./Component/MainHeader"
import NavBar from "./Component/NavBar"
import MainFoter from "./Component/Foter/MainFoter"
import SubFoter from "./Component/Foter/SubFoter"


function App() {
  return (
   <div className="main bg-[#f8f8f8] overflow-x-hidden">
        <TopHeader/>
          <MainHeader/>
          <NavBar/>
          <Outlet/>
       <MainFoter/>
       <SubFoter/>
          
   </div>
  )
}

export default App
