import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./NextArrow"; // Make sure this path is correct
import SamplePrevArrow from "./Preview";
import { CiStar } from "react-icons/ci";

function Responsive() {
  var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="bg-amber-300 h-9 w-9 " />, // Use the component directly
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container mx-8">
      <Slider {...settings}>
        <div className="main  px-4 p-4 overflow-hidden">
           <div className="icon bg-gray-100  mx-2 rounded-lg overflow-hidden  ">
              <div className="icon flex items-center mx-2 gap-2">
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <p>(5.0)</p>
              </div>
              <div className="pragrap px-4">
                 <p className=" font-sans text-base whitespace-normal">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos asperiores
                     ipsum. Iusto ipsam, numquam, recusandae eius cupiditate nostrum explicabo vitae 
                     exercitationem officiis laboriosam libero aliquam! Eius ipsa enim similique. Qui
                 </p>
              </div>
              <div className="profile-area flex gap-2 items-center py-4 bg-indigo-600 w-full">
                 <div className="profile-image h-10 w-10 roun mx-4">
                    <img className=" rounded-full" src="https://i.ibb.co/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                 </div>
                 <div className="text leading-4 ">
                    <h1 className=" font-semibold font-sans">Rakib Sheikh</h1>
                    <p className=" font-sans"> Bangladesh</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="main  px-4 p-4 overflow-hidden">
           <div className="icon bg-gray-100  mx-2 rounded-lg overflow-hidden  ">
              <div className="icon flex items-center mx-2 gap-2">
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <p>(5.0)</p>
              </div>
              <div className="pragrap px-4">
                 <p className=" font-sans text-base whitespace-normal">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos asperiores
                     ipsum. Iusto ipsam, numquam, recusandae eius cupiditate nostrum explicabo vitae 
                     exercitationem officiis laboriosam libero aliquam! Eius ipsa enim similique. Qui
                 </p>
              </div>
              <div className="profile-area flex gap-2 items-center py-4 bg-indigo-600 w-full">
                 <div className="profile-image h-10 w-10 roun mx-4">
                    <img className=" rounded-full" src="https://i.ibb.co/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                 </div>
                 <div className="text leading-4 ">
                    <h1 className=" font-semibold font-sans">Rakib Sheikh</h1>
                    <p className=" font-sans"> Bangladesh</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="main  px-4 p-4 overflow-hidden">
           <div className="icon bg-gray-100  mx-2 rounded-lg overflow-hidden  ">
              <div className="icon flex items-center mx-2 gap-2">
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <p>(5.0)</p>
              </div>
              <div className="pragrap px-4">
                 <p className=" font-sans text-base whitespace-normal">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos asperiores
                     ipsum. Iusto ipsam, numquam, recusandae eius cupiditate nostrum explicabo vitae 
                     exercitationem officiis laboriosam libero aliquam! Eius ipsa enim similique. Qui
                 </p>
              </div>
              <div className="profile-area flex gap-2 items-center py-4 bg-indigo-600 w-full">
                 <div className="profile-image h-10 w-10 roun mx-4">
                    <img className=" rounded-full" src="https://i.ibb.co/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                 </div>
                 <div className="text leading-4 ">
                    <h1 className=" font-semibold font-sans">Rakib Sheikh</h1>
                    <p className=" font-sans"> Bangladesh</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="main  px-4 p-4 overflow-hidden">
           <div className="icon bg-gray-100  mx-2 rounded-lg overflow-hidden  ">
              <div className="icon flex items-center mx-2 gap-2">
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <p>(5.0)</p>
              </div>
              <div className="pragrap px-4">
                 <p className=" font-sans text-base whitespace-normal">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos asperiores
                     ipsum. Iusto ipsam, numquam, recusandae eius cupiditate nostrum explicabo vitae 
                     exercitationem officiis laboriosam libero aliquam! Eius ipsa enim similique. Qui
                 </p>
              </div>
              <div className="profile-area flex gap-2 items-center py-4 bg-indigo-600 w-full">
                 <div className="profile-image h-10 w-10 roun mx-4">
                    <img className=" rounded-full" src="https://i.ibb.co/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                 </div>
                 <div className="text leading-4 ">
                    <h1 className=" font-semibold font-sans">Rakib Sheikh</h1>
                    <p className=" font-sans"> Bangladesh</p>
                 </div>
              </div>
           </div>
        </div>
        <div className="main  px-4 p-4 overflow-hidden">
           <div className="icon bg-gray-100  mx-2 rounded-lg overflow-hidden  ">
              <div className="icon flex items-center mx-2 gap-2">
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <CiStar className=" text-[#ffbb38]" />
                 <p>(5.0)</p>
              </div>
              <div className="pragrap px-4">
                 <p className=" font-sans text-base whitespace-normal">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos asperiores
                     ipsum. Iusto ipsam, numquam, recusandae eius cupiditate nostrum explicabo vitae 
                     exercitationem officiis laboriosam libero aliquam! Eius ipsa enim similique. Qui
                 </p>
              </div>
              <div className="profile-area flex gap-2 items-center py-4 bg-indigo-600 w-full">
                 <div className="profile-image h-10 w-10 roun mx-4">
                    <img className=" rounded-full" src="https://i.ibb.co/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg" alt="" />
                 </div>
                 <div className="text leading-4 ">
                    <h1 className=" font-semibold font-sans">Rakib Sheikh</h1>
                    <p className=" font-sans"> Bangladesh</p>
                 </div>
              </div>
           </div>
        </div>
        
       
        
      </Slider>
    </div>
  );
}

export default Responsive;
