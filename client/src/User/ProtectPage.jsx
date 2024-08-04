import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Home from "../Page/Home";



function ProtectPage() {
   const userData = useSelector((state) => state?.userData?.user); 

  return  userData !==null ? <Outlet /> : <Home></Home>
}

export default ProtectPage;
