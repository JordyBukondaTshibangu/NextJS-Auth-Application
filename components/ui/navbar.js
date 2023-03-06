import Link from "next/link";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const NavBar = () => {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  const handleLogin = () => push(`/login?callbackUrl=${asPath}`);

  return (
    <header className="hidden sm:flex bg-black h-[120px]  items-center justify-between px-20 py-10 w-full fixed z-10 shadow-sm">
      <Link href="/" className="text-5xl text-white font-bold">
        Next - Auth
      </Link>
      <p className="text-2xl font-medium leading-7 cursor-pointer text-white uppercase hover:text-[#63FFB9]">
        {session?.user.name}
      </p>
      <ul className="flex items-center justify-between gap-10 text-white">
        <li className="text-lg font-medium leading-7 cursor-pointer hover:text-[#63FFB9]">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg font-medium leading-7 cursor-pointer hover:text-[#63FFB9]">
          <Link href="/account">Account</Link>
        </li>
        {session ? (
          <button
            className="bg-[#63FFB9] flex items-center justify-center rounded-md text-white text-lg px-5 py-2"
            onClick={() => signOut({ redirect: false })}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-[#63FFB9] flex items-center justify-center rounded-md text-white text-lg px-5 py-2"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        )}
      </ul>
    </header>
  );
};

export default NavBar;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        session: null,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
