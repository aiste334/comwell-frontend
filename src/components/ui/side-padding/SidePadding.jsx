const SidePadding = ({ className, children, ...otherProps }) => {
  return (
    <div className={`px-20 ${className}`} {...otherProps}>{children}</div>
  )
}

export default SidePadding