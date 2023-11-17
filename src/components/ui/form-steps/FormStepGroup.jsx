const FormStepGroup = ({ currentStep = 1, children }) => {
  return (
    <>
      {children[currentStep-1] || ''}
    </>
  )
}

export default FormStepGroup