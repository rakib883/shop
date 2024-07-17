import { GrFormPrevious } from "react-icons/gr";
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className=" bg-orange-400 inline-flex absolute mx-4 cursor-pointer right-[50%] bottom-[-30px]"
        onClick={onClick}
      ><GrFormPrevious className=" text-3xl" /></div>
    );
  }


export default SamplePrevArrow