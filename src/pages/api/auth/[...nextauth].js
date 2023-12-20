import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: {  label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        console.log("step 1");
        const { username, password } = credentials;
      
        try {
          const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password}),
          });
      
          console.log("step 2");
          const data = await response.json();
          
          if (response.ok && data.result) {
            console.log("step 3");
            const user = {
              id: data.result.userId,
              name: data.result.name,
              email: data.result.email,
              phoneNumber : data.result.phoneNumber,
            };
      
            console.log("user from authorize callback");
            console.log(user);
            return Promise.resolve(user);
          } else {
            console.log("Login failed:", data.message);
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Error during login:", error);
          return Promise.resolve(null);
        }      
      },
    },)
  ],
  callbacks: {
    async jwt({token, user}) {    
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.phoneNumber = user.phoneNumber;
      }
    
      return token;
    },
    
    async session({session, token}) {
      session.user = token;
      return session;
    },
  },
});
