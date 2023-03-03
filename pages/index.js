import { getSession } from "next-auth/react";
import Image from "next/image";
import NavBar from "../components/ui/navbar";
import welcome from "../public/assets/undraw_welcome_cats_thqn.svg";

export default function Account() {
  return (
    <main className="bg-black h-full min-h-screen">
      <NavBar />
      <section className="max-w-7xl container mx-auto bg-grey-800 flex items-center justify-center">
        <div className="mt-64">
          <Image src={welcome} width={924} height={934} alt="Welcome" />
        </div>
      </section>
    </main>
  );
}
