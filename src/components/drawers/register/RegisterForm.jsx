import React, { useState } from 'react'
import Heading from '../../ui/text/Heading'
import Paragraph from '../../ui/text/Paragraph'
import Input from '../../ui/inputs/Input'
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton'
import InputOption from '../../ui/inputs/InputOption'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {

  const [userData, setUserData] = useState({})

  const form = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='flex flex-col h-full' onSubmit={form.handleSubmit(onSubmit)}>
      <Heading>Join the Comwell club</Heading>
      <Paragraph className="my-2">
        Become a free member of our Comwell Club and get points every time you stay with us. You also receive 25 points when you register.
      </Paragraph>

      <div className="py-12 flex flex-col gap-4 overflow-y-auto flex-1">
        <Input 
          form={{
            ...form,
            name: "name",
            validation: {
              required: { value: false, message: "Full name is required" }
            }
          }}
          label="Full name" 
          value={userData.name} 
          onChange={(e) => setUserData(prev => ({...prev, name: e.target.value}))}
        />
        <Input label="Email" type="email" value={userData.email} onChange={(e) => setUserData(prev => ({...prev, email: e.target.value}))}/>
        <Input label="Zipcode" type="number" maxLength="4" value={userData.zipcode} onChange={(e) => setUserData(prev => ({...prev, zipcode: e.target.value}))}/>
        <Input label="Phone number" type="number" value={userData.phoneNumber} onChange={(e) => setUserData(prev => ({...prev, phoneNumber: e.target.value}))}/>
        <Input label="Password" value={userData.password} type="password" onChange={(e) => setUserData(prev => ({...prev, password: e.target.value}))}/>
        <Input label="Repeat password" value={userData.repeatPassword} type="password" onChange={(e) => setUserData(prev => ({...prev, repeatPassword: e.target.value}))}/>
        <Input label="Sex" value={userData.sex} type="select" onChange={(e) => setUserData(prev => ({...prev, sex: e.target.value}))}>
          <InputOption value="">Not specified</InputOption>
          <InputOption value="male">Male</InputOption>
          <InputOption value="female">Female</InputOption>
        </Input>
        <Input label="Date of birth" value={userData.name} type="date" onChange={(e) => setUserData(prev => ({...prev, name: e.target.value}))}/>
      </div>

      <DrawerPrimaryButton>Register</DrawerPrimaryButton>
    </form>
  )
}

export default RegisterForm