
function Title({firstTitle,secendTitle}) {
  return (
    <div>
           <div className="header flex justify-between items-center my-4">
                <p className="font-sans text-[30px] font-bold cursor-pointer">{firstTitle}</p>
                <p className="font-sans text-[20px] font-semibold cursor-pointer">{secendTitle}</p>
            </div>
    </div>
  )
}

export default Title