import clsx from 'clsx'

function PrizeFormat({className,price}) {
    const priceItem = new Number(price).toLocaleString("en-us",{
        style :"currency",
        currency:"USD",
        minimumFractionDigits:2

    })
  return (
    <div className={clsx(`${className} price`)}>{priceItem}</div>
  )
}

export default PrizeFormat