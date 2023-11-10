const Label = ({ children, className, ...otherProps }) => {
  return (
    <span {...otherProps} className={`text-[11px] uppercase font-semibold leading-3 tracking-wider ${className}`}>{children}</span>
  )
}

export default Label