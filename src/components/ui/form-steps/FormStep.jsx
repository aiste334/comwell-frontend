import BackArrowButton from "@/src/components/ui/buttons/circle-buttons/BackArrowButton"

const FormStep = ({ children, onReturn }) => {
  return (
    <>
      { onReturn && 
        <BackArrowButton className="absolute top-4 left-5" onClick={onReturn} />
      }
      {children}
    </>
  )
}

export default FormStep