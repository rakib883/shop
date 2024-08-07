import { useSelector } from "react-redux";
import FilterTitle from "../UI/FilterTitle";
import InputSearch from "../UI/InputSearch";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";
import app from "../Firebase/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


function PersonalInfo() {
  const userData = useSelector((item) => item?.userData?.user);

  const storage = getStorage(app);
  

  const [fileURL, setFileURL] = useState(null);

  const handleAvatar = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = ref(storage, `${selectedFile.name}`);

   
      try {
        await uploadBytes(storageRef, selectedFile);
        const url = await getDownloadURL(storageRef);
        setFileURL(url);
        console.log('File uploaded successfully:', url);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };



// get form data start area start
 const [firstName,setFirsrName] = useState("")
 const [latstName,setLastrName] = useState("")
 const [email,setEmail] = useState("")
 const [phoneNumber,setPhoneNumber] = useState("")
 const [countery,setCountery] = useState("")
 const [address,setAddress] = useState("")
 const [towon,setTown] = useState("")
 const [zipCode,setZipCode] = useState("")

 const infoHandeler =()=>{
     fetch("http://localhost:3000/address",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
       body:JSON.stringify({
         name:firstName,
         latstName : latstName,
         town:towon,zipCode:zipCode,    
         email:email,
         phoneNumber:phoneNumber,
         country:countery,
         address:address,
       })
     })
      .then(res=>res.json())
      .then(res=>console.log(res))
     
 }
// get form data are end








  return (
    <div>
      <div className="content">
        <div className="name-area mt-10 mx-4 flex gap-2">
          <div className="input-area w-[70%] flex flex-col gap-4">
            <div className="name flex gap-4">
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setFirsrName(e.target.value)} title="First Name" placeholder={userData?.name} />
              </div>
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setLastrName(e.target.value)} title="Last Name" placeholder="Last Name" />
              </div>
            </div>

            <div className="email flex gap-4">
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setEmail(e.target.value)} title="Email" placeholder={userData?.email} />
              </div>
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setPhoneNumber(e.target.value)} title="Phone Number" placeholder="Your phone" />
              </div>
            </div>

            <div className="Countery">
              <div className="name-area">
                <InputSearch onChange={(e)=>setCountery(e.target.value)} title="Country Name" placeholder="Your Country" />
              </div>
            </div>

            <div className="Countery">
              <div className="name-area">
                <InputSearch onChange={(e)=>setAddress(e.target.value)} title="Address" placeholder="Address" />
              </div>
            </div>

            <div className="email flex gap-4">
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setTown(e.target.value)} title="Town/City" placeholder="Your Town" />
              </div>
              <div className="name-area w-[50%]">
                <InputSearch onChange={(e)=>setZipCode(e.target.value)} title="Zip Code" placeholder="Zip Code" />
              </div>
            </div>

            <div className="button-area">
              <button className="text-red-700 font-sans">Cancel</button>
              <button onClick={infoHandeler} className="bg-black text-white font-sans px-3 mx-6 py-2">Update Profile</button>
            </div>
          </div>

          <div className="profile-image w-[30%]">
            <div className="content mx-4">
              <div className="title">
                <FilterTitle title="Update Profile" />
                <p>Profile of at least Size300x300. Gifs work too. Max 5mb.</p>
              </div>
              <div className="image-area group relative flex justify-center items-center ">
                 <div className="image w-[100px] h-[100px]">
                    <img className="mt-4 border-2 w-full h-full  border-green-600 cursor-pointer rounded-full" src={fileURL || userData?.image} alt="" />
                 </div>
                <div className="edit-icin group-hover:block duration-300 cursor-pointer absolute hidden top-[50%] transform -translate-y-1/2">
                  <label htmlFor="file-upload" className="relative cursor-pointer">
                    <input onChange={handleAvatar} type="file" id="file-upload" className="sr-only" />
                    <FaUserEdit className="text-white" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
