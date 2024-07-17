// NextArrow.js
import { GrFormNext } from "react-icons/gr";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className=" bg-slate-500 inline-block mx-auto justify-center absolute cursor-pointer mx-2 bottom-[-30px] left-[50%]"
      onClick={onClick}
    >
      <GrFormNext className=" text-3xl" />
    </div>
  );
}

export default SampleNextArrow;
