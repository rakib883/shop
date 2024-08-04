import CartProduct from "../UI/CartProduct"
import HeaderPagenation from "../UI/HeaderPagenation"

function Cart() {
  return (
    <div>
        <div className="content">
            <div className="header">
                <HeaderPagenation title="Your Cart"/>
            </div>
            <div className="main">
                <div className="table-content">
                    <div className="item mx-8">
                       <CartProduct/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart