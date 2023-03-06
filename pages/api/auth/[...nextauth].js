import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import EmailProvider from "next-auth/providers/email";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        if (!username) {
          return null;
        }
        // const res = await fetch("http://localhost:8080/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username,
        //     password,
        //   }),
        // });
        // let user = await res.json();
        let user = {
          id: 1,
          phone: "089 848 8484",
          name: username,
          email: username,
          address: "13 Bloemendal Mowbray",
          zip: "7700",
          role: "Frontend Software Engineer",
          accessToken: "Y9/yr3NfXj4mKcp1PxX1Bnshb3Z7X+nHXwZWVkU3Uas=",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
