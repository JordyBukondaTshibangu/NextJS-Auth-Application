import { useSession, signIn, getSession } from "next-auth/react";
import Image from "next/image";
import LoginImage from "../public/assets/undraw_my_password_re_ydq7.svg";
import google from "../public/assets/google.webp";
import emailLogo from "../public/assets/email.png";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter;

  const login = async () => {
    const result = await signIn("credentials", {
      username: email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    if (result) {
      router.push("/account");
    }
  };

  return (
    <main className="bg-[#63FFB9] h-full min-h-screen">
      <section className="max-w-7xl  container mx-auto min-h-screen bg-grey-800 flex items-center justify-center gap-12">
        <form className="w-1/3 h-full bg-white rounded-xl shadow-2xl flex flex-col gap-5 px-10">
          <div>
            <h1 className="text-4xl font-bold leading-7 pt-20 text-[#000080]">
              Login
            </h1>
            <p className="text-gray-400 text-sm font-medium mt-5">
              Doesn't have an account yet ?{" "}
              <span className="font-bold">Sign up</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg">Email Address</label>
              <input
                type="email"
                value={email}
                placeholder="your@example.com"
                className="h-[45px] w-full border-gray-400 border-2 rounded-lg px-5"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter 6 characters or more"
                className="h-[45px] w-full border-gray-400 border-2 rounded-lg px-5"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                placeholder="Enter 6 characters or more"
                className="h-[15px] border-gray-400 border-2 rounded-lg"
              />
              <label className="text-gray-400 text-xs">Remember Me</label>
            </div>
            <button
              className="bg-blue-500 flex items-center justify-center p-3 mt-5 rounded-md text-white text-xl"
              onClick={() => login()}
            >
              Login
            </button>
            <p className="text-center text-gray-400 text-sm">Or login with</p>

            <div className="flex flex-col gap-2 pb-10">
              <button
                className="w-full flex items-center justify-center gap-5 p-3 rounded-md text-gray-400 hover:text-white text-xs border-2 border-red-300 hover:bg-red-300"
                onClick={() => signIn()}
              >
                <Image src={google} width={20} height={20} alt="Google logo" />
                <span className="min-w-max text-red-400 hover:text-white">
                  Login with Google
                </span>
              </button>

              <button
                className="w-full flex items-center justify-center gap-5 p-3 rounded-md text-gray-400 text-xs border-2 border-blue-400"
                onClick={() => signIn()}
              >
                <Image
                  src={emailLogo}
                  width={20}
                  height={20}
                  alt="Google logo"
                />
                <span className="min-w-max text-blue-400">
                  Login with Email
                </span>
              </button>
            </div>
          </div>
        </form>
        <div className="bg-red-100 rounded-full">
          <Image src={LoginImage} width={600} height={600} alt="Sign-in" />
        </div>
      </section>
    </main>
  );
};

export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/account",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
