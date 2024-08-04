
function CustomButton({title,className}) {
  return (
    <div>
        <button className={`${className} bg-black py-3`}>{title}</button>
    </div>
  )
}

export default CustomButton