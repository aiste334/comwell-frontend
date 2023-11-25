import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
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
  const [name, setName] = useState('');
  const [drawer, setDrawer] = useState('');

  const { data: session, status } = useSession({
    onSessionChange: (newSession) => {
      console.log('Session updated:', newSession);
    },
  });

  const handleSignIn = async () => {
    try {
      console.log("trying");
      const result = await signIn('credentials', {
        redirect: false,
        username: email,
        password,
      });
      if (!result.error) {
        // Wait for the session to be updated
        await fetch('/api/auth/session');
        console.log("success y´all");
        console.log(result);
        // The updated session will be logged via the onSessionChange callback
      } else {
        console.error('Login failed:', result.error);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      alert('Logged out successfully');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  useEffect(() => {
    // Log the initial session
    console.log('Initial session:', session);
  }, [session]);

  return (
    
    <div className='flex flex-col gap-2'>
       {session ? (
        <>
          <Paragraph>Welcome, {session.user.name}!</Paragraph>
          <div className='border-t-cw-gray-300 border-t-[1px] px-4 pt-6'>
            <PrimaryButton onClick={handleSignOut}>Log out</PrimaryButton>
          </div>
        </>
      ) : (
        <>

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

      <ShortSideDrawer isOpen={drawer === 'reset'} onClose={() => setDrawer('')}></ShortSideDrawer>

      <ShortSideDrawer isOpen={drawer === 'register'} onClose={() => setDrawer('')}>
  <RegisterForm onCloseDrawer={() => setDrawer('')} />
</ShortSideDrawer>
      </>)}
    </div>
  );
};

export default LogInForm;
