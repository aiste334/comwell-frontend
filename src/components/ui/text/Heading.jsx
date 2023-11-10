const Heading = ({ children, className }) => {
  return (
    <h2 className={`text-4xl font-semibold ${className}`}>{children}</h2>
  )
}

export default Heading