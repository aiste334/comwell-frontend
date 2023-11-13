const FormStepGroup = ({ currentStep = 1, className, children }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children[currentStep-1] || ''}
    </div>
  )
}

export default FormStepGroup