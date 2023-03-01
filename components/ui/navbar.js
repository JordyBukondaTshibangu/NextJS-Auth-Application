import Link from "next/link";
import { signOut } from "next-auth/react";

const NavBar = () => {
  return (
    <header className="hidden sm:flex bg-black h-[120px]  items-center justify-between px-20 py-10 w-full fixed z-10 shadow-sm">
      <Link href="/" className="text-5xl text-white font-bold">
        Next - Auth
      </Link>
      <ul className="flex items-center justify-between gap-10 text-white">
        <li className="text-lg font-medium leading-7 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg font-medium leading-7 cursor-pointer">
          <Link href="/account">Account</Link>
        </li>
        <button
          className="bg-[#63FFB9] flex items-center justify-center rounded-md text-white text-lg px-5 py-2"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </ul>
    </header>
  );
};

export default NavBar;
