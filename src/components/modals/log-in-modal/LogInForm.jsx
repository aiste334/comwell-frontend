import React, { useState } from 'react'
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton'
import Input from '../../ui/inputs/Input'
import Paragraph from '../../ui/text/Paragraph'
import TextLink from '../../ui/text/TextLink'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import ShortSideDrawer from '../../side-drawer/ShortSideDrawer'
import RegisterForm from '../../drawers/register/RegisterForm'

const LogInForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [drawer, setDrawer] = useState()

  return (
    <div className='flex flex-col gap-2'>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>

      <div className='p-1'>
        <Paragraph>Did you forget your password?</Paragraph>
        <TextLink className="leading-3 mb-5" onClick={() => setDrawer('reset')}>Reset password</TextLink>

        <Paragraph>Don`t have a profile?</Paragraph>
        <TextLink className="leading-3" onClick={() => setDrawer('register')}>Join the Comwell club</TextLink>
      </div>

      <div className='border-t-cw-gray-300 border-t-[1px] px-4 pt-6'>
        <PrimaryButton>Log in</PrimaryButton>
      </div>

      <ShortSideDrawer isOpen={drawer === 'reset'} onClose={() => setDrawer()}>
        
      </ShortSideDrawer>
      
      <ShortSideDrawer isOpen={drawer === 'register'} onClose={() => setDrawer()}>
        <RegisterForm />
      </ShortSideDrawer>
    </div>
  )
}

export default LogInForm