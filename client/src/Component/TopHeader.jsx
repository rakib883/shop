
function TopHeader() {
  return (
    <div className="border-b-[1px]">
      <div className="all-content mx-2  md:mx-10 flex justify-between py-[12px] text-[12px] font-MainFont font-semibold ">
          <div className="  flex items-center gap-4">
             <p>Account</p>
             <p>Trac Order</p>
             <p>Support</p>
          </div>
          <div className=" items-center gap-4 hidden md:inline-flex">
            <p>United state</p>
            <p>USD</p>
            <p>Bangla</p>
          </div>
      </div>
    </div>
  )
}

export default TopHeader