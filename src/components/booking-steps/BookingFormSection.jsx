import React from 'react'
import FormStepGroup from '../ui/form-steps/FormStepGroup'
import FormStep from '../ui/form-steps/FormStep'
import useFormSteps from '@/src/hooks/useFormSteps'


function BookingFormSection() {

    const { currentStep, next, prev, reset } = useFormSteps(3)


  return (
    <FormStepGroup currentStep={currentStep}>
        <FormStep>
            <PrimaryButton onClick={() => next()}>Next step</PrimaryButton>
        </FormStep>
        <FormStep>
            <PrimaryButton onClick={() => prev()}>Previous step</PrimaryButton>
            <PrimaryButton onClick={() => next()}>Next step</PrimaryButton>
        </FormStep>
        <FormStep>
            <h1>last step</h1>
            <PrimaryButton onClick={() => prev()}>Previous step</PrimaryButton>
        </FormStep>
     </FormStepGroup>

  )
}

export default BookingFormSection