import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import LoginImage from "../public/assets/undraw_my_password_re_ydq7.svg";
import google from "../public/assets/google.webp";

const Login = () => {
  const { data: session } = useSession();

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
                placeholder="your@example.com"
                className="h-[45px] w-full border-gray-400 border-2 rounded-lg px-5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg">Password</label>
              <input
                type="password"
                placeholder="Enter 6 characters or more"
                className="h-[45px] w-full border-gray-400 border-2 rounded-lg px-5"
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
            <button className="bg-blue-500 flex items-center justify-center p-3 mt-5 rounded-md text-white text-xl">
              Login
            </button>
            <p className="text-center text-gray-400 text-sm">Or login with</p>
            <div className="flex mb-10">
              <button
                className="flex items-center justify-center gap-5 p-3 mt-5 rounded-md text-gray-400 text-sm border-2 border-red-200"
                onClick={() => signIn()}
              >
                <Image src={google} width={25} height={25} />
                <span className="text-red-400">Login with Google</span>
              </button>
            </div>
          </div>
        </form>
        <div className="bg-red-100 rounded-full">
          <Image src={LoginImage} width={600} height={600} />
        </div>
      </section>
    </main>
  );
};

export default Login;
