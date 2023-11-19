// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {  label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: 'test', password: 'test' };

        if (user && user.password === credentials.password && user.name === credentials.username) {
          console.log('WooHoo');
          return Promise.resolve(user);
        } else {
          console.log('sad');
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
