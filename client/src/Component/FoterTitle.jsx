import clsx from 'clsx'; // Corrected import statement

function FooterTitle({ title, className }) { // Corrected function name and added destructuring for props
  return (
    <div className={clsx(`${className} text-[16px] font-sans font-semibold first-letter:uppercase my-4 `)}>{title}</div>
  );
}

export default FooterTitle;
