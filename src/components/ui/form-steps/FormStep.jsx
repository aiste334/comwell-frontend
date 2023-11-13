const FormStep = ({ className, children }) => {
  return (
    <div className={`flex-1 ${className}`}>
      {children}
    </div>
  )
}

export default FormStep