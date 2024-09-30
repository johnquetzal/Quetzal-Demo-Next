
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import quetzalLogo from "../images/quetzal.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quetzal Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image className={styles.logo} src={quetzalLogo} width={240} height={240} alt="Quetzal" />

<p className={styles.description}>
  Internationalize in minutes, not months.
 </p>

      <main>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
         </h1> */}

         <p className={styles.small}>
          Internationalize in minutes, not months.
         </p>


        <div className={styles.grid}>
          

          <a href="https://getquetzal.com/signup" className={styles.card}>
            <h3>Create a Project &rarr;</h3>
            <p>Get started with Quetzal by creating a project</p>
          </a>

          <a href="https://quetzal.mintlify.app/getting-started" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth setup instructions for Quetzal</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
          <div className="text-center">
            <Link
              href="/"
              className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              
            </Link>
            <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
              {
                "© 2024 Quetzal Labs, Inc. All Rights Reserved. Built with ❤️ in Oakland 🌳."
              }
            </span>
            
          </div>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
        background-color: #222222;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
