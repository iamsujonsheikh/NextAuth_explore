import Head from "next/head";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  console.log(session)

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      <h2 style={{ textAlign: "center", color: "green" }}>Nme: {session?.user?.name}</h2>
      <h2 style={{ textAlign: "center", color: "blue" }}>Email: {session?.user?.email}</h2>
    </div>
  );
};

export default HomePage;
