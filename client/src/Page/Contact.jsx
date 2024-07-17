import ContactInfo from "../Component/ContactInfo"
import FilterTitle from "../UI/FilterTitle"

function Contact() {
  return (
    <div>
        <div className="content mx-8">
            <div className="title text-center my-8">
                <FilterTitle title="Contact" />
            </div>
            <div className="all-content lg:flex gap-4">
                <div className="info lg:w-[50%]">
                    <ContactInfo/>
                </div>
                <div className="contact lg:w-[50%] bg-red-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde 
                  quaerat illo tempore et inventore exercitationem, incidunt culpa cupiditate fugit modi quo rerum consectetur tenetur nesciunt enim blanditiis esse corrupti. Quod qui voluptate consectetur debitis illum dolorem, facere amet dolores. Sapiente vero, 
                  minus quas assumenda vitae libero suscipit doloremque tenetur.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact