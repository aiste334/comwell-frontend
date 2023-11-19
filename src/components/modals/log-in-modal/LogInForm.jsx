import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton';
import Input from '../../ui/inputs/Input';
import Paragraph from '../../ui/text/Paragraph';
import TextLink from '../../ui/text/TextLink';
import PrimaryButton from '../../ui/buttons/PrimaryButton';
import ShortSideDrawer from '../../side-drawer/ShortSideDrawer';
import RegisterForm from '../../drawers/register/RegisterForm';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [drawer, setDrawer] = useState();

  // Use useSession directly in the component body
  const { data: session } = useSession();

  // Handle sign-in using NextAuth.js
  const handleSignIn = async () => {
    alert('suicide');
    try {
      alert('death');
      // Use NextAuth.js signIn function
      await signIn('credentials', {
        username: email,
        password,
        redirect: false, // Prevent automatic redirection
      });

      // Do not use useSession inside an asynchronous function
      const newSession = await fetch('/api/auth/session'); // Replace with your endpoint

      if (newSession) {
        // The user is authenticated; close the drawer or do something else
        setDrawer();
        alert('UGH');
      } else {
        // The sign-in was not successful; handle accordingly
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any errors during the sign-in process
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <Input label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        label='Password'
        value={password}
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className='p-1'>
        <Paragraph>Did you forget your password?</Paragraph>
        <TextLink className='leading-3 mb-5' onClick={() => setDrawer('reset')}>
          Reset password
        </TextLink>

        <Paragraph>Don't have a profile?</Paragraph>
        <TextLink className='leading-3' onClick={() => setDrawer('register')}>
          Join the Comwell club
        </TextLink>
      </div>

      <div className='border-t-cw-gray-300 border-t-[1px] px-4 pt-6'>
        <PrimaryButton onClick={handleSignIn}>Log in</PrimaryButton>
      </div>

      <ShortSideDrawer isOpen={drawer === 'reset'} onClose={() => setDrawer()}></ShortSideDrawer>

      <ShortSideDrawer isOpen={drawer === 'register'} onClose={() => setDrawer()}>
        <RegisterForm />
      </ShortSideDrawer>
    </div>
  );
};

export default LogInForm;
