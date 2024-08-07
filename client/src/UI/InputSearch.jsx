

function InputSearch({onChange,placeholder,title,className,}) {
  return (
    <div>
        <h1 className=" font-sans text-[13px] my-[5px]">{title}*</h1>
        <input onChange={onChange}  placeholder={placeholder} className={` ${className}   outline-none border font-semibold w-full py-3 px-3`} type="text" />
    </div>
  )
}

export default InputSearch