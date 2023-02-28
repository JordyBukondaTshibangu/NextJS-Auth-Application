import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <main className="bg-[#F5F5DC] h-full min-h-screen">
      <section className="max-w-7xl container mx-auto bg-grey-800 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold leading-7 pt-20">Please login</h1>
        <form className="w-[30%] bg-white flex flex-col gap-5 mt-20 border border-grey-400 p-5 rounded-md pt-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="h-[45px] w-full border-0 border-b-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="pasword"
                className="h-[45px] w-full border-0 border-b-2 outline-none"
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-300 flex items-center justify-center p-3 mt-10 rounded-md text-white text-xl">
                Login
              </button>
              <button
                className="flex items-center justify-center p-1 mt-10 rounded-md underline text-xs"
                onClick={() => signIn()}
              >
                Login with Google
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
