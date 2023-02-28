import { useSession, signOut, getSession } from "next-auth/react";

export default function Account() {
  const { data: session, status } = useSession({ required: true });
  if (status === "authenticated") {
    return (
      <main className="bg-[#F5F5DC] h-full min-h-screen">
        <section className="max-w-7xl container mx-auto bg-grey-800 flex items-center justify-center">
          <button
            className="bg-blue-300 flex items-center justify-center p-3 mt-10 rounded-md text-white text-xl"
            onClick={() => signOut()}
          >
            Logout
          </button>
          <h1 className="text-4xl font-bold leading-7 pt-20">
            Welcome to the Account Page
          </h1>
        </section>
      </main>
    );
  }
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
};
