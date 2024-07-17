import Facatelies from "../Component/Facatelies"
import FoterOffer from "../Component/FoterOffer"
import FilterTitle from "../UI/FilterTitle"
import Responsive from "../UI/Slider"

function About() {
  return (
      <div className="main ">
        <div className="bg-[#f8f8f8]">
          <div className="content mx-8">
              <div className="title">
                  <FilterTitle className=" md:text-4xl text-center my-8" title="About Us"  />
              </div>
              <div className="about-content md:flex gap-4  items-center my-8">
                <div className="image w-full md:w-[50%]">
                    <img src="https://i.ibb.co/tmh2NMr/about-banner.png" alt="" />
                </div>
                <div className="text w-full mt-2 md:mt-0 md:w-[50%]">
                    <div className="title">
                      <FilterTitle className="text-[18px] font-sans" title="What is e-commerce business?" />
                    </div>
                    <div className="pragrsph">
                      <p className="text-[#a5a4a6] font-sans text-[16px]">
                      Lorem Ipsum is simply dummy text of the printi ng and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries but also the on leap into electronic typesetting.
                      </p>
                    </div>
                    <div className="list-items my-4">
                      <ul className="list-disc text-[#a5a4a6] font-sans text-[16px] mx-2 ">
                        <li>slim body with metal cover</li>
                        <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                        <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                      </ul>
                    </div>
                    <div className="contact ">
                      <button className="bg-[#ffbb38] block px-3 font-sans text-[16px] font-semibold py-2">Contact Us</button>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="review-area  ">
           <div className="title text-center my-8">
             <FilterTitle className=" text-md md:text-3xl" title="Customers Feedback" />
           </div>
           <div className="slider">
             <Responsive/>
           </div>
        </div>
        <div className=" my-14">
          <Facatelies/>
        </div>
        <div className="latest-area">
           <div className="title text-center my-8">
              <FilterTitle title="My Latest News" />
           </div>
           <div className="content text-center">
              <FoterOffer/>
           </div>
        </div>
      </div>  
  )  
}

export default About