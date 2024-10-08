import { clsx } from 'clsx';
function FilterTitle({title,className}) {
  return (
    <div>
        <h1 className={clsx(className, "font-sans", "font-semibold", "text-[20px]")}>{title}</h1>
    </div>
  )
}

export default FilterTitle