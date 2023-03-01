import Head from "next/head";
import { useSession, getSession } from "next-auth/react";
import NavBar from "../components/ui/navbar";
import Image from "next/image";
import ImageOne from "../public/assets/image-one.svg";
import ImageTwo from "../public/assets/image-two.svg";
import ImageThree from "../public/assets/image-three.svg";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-full ">
        <NavBar />
        <section className="max-w-7xl container mx-auto bg-grey-800 flex flex-col gap-64 items-center justify-center py-64">
          <div>
            <Image
              src={ImageOne}
              width={800}
              height={800}
              alt="first-image"
              className="px-10 sm:p-0"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="sm:w-1/2 text-white flex flex-col gap-10 px-5 sm:p-0">
              <h3 className="text-5xl font-bold ">Hello world</h3>
              <p className="text-sm leading-7">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a In publishing and graphic design, Lorem ipsum is
                a placeholder text commonly used to demonstrate the visual form
                of a document or a
              </p>
              <Link
                href="/account"
                className="bg-[#63FFB9] w-full  sm:w-1/3 flex items-center justify-center rounded-md text-white text-lg px-5 py-2"
              >
                Account
              </Link>
            </div>
            <Image
              src={ImageTwo}
              width={600}
              height={600}
              alt="first-image"
              className="px-10 sm:p-0"
            />
          </div>
          <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-20">
            <Image
              src={ImageThree}
              width={600}
              height={600}
              alt="first-image"
              className="px-10 sm:p-0"
            />
            <div className="sm:w-1/2 text-white flex flex-col gap-10 px-5 sm:p-0">
              <h3 className="text-5xl font-bold ">Hello world</h3>
              <p className="text-sm leading-7">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a In publishing and graphic design, Lorem ipsum is
                a placeholder text commonly used to demonstrate the visual form
                of a document or aIn publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a In publishing and graphic design, Lorem
              </p>
              <Link
                href="/account"
                className="bg-[#63FFB9] w-full  sm:w-1/3 flex items-center justify-center rounded-md text-white text-lg px-5 py-2"
              >
                Account
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "login",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
