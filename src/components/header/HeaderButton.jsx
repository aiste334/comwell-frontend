const HeaderButton = ({ children, className = '', ...otherProps }) => {
  return (
    <button className={`flex gap-2 items-center text-white ${className}`} {...otherProps}>{children}</button>
  )
}

export default HeaderButton