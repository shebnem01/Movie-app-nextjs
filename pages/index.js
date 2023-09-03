import Head from "next/head";
import Layout from "../shared/components/Layout";
import { useRouter } from "next/router";
import { ROUTER } from "../shared/constant/router";
export default function Home() {
  const { push } = useRouter();
  return (
    <main>
      <Head>
        <title> Movie app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex w-full h-full items-center justify-center text-white">
          <button
            onClick={() => push(ROUTER.MOVIES)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border
             border-blue-500 hover:border-transparent rounded"
          >
            Welcome to movies
          </button>
        </div>
      </Layout>
    </main>
  );
}
