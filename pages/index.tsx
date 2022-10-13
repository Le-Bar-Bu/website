import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Le Bar&apos;Bu</title>
        <meta
          name="description"
          content="Bar à ambiance, lancer de haches, karaoké, concerts à Saint Avold"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Le Bar&apos;Bu</h1>

        <p className={styles.description}>
          Bar à ambiance, lancer de haches, karaoké, concerts à Saint Avold
        </p>
        <p className={styles.soon}>Ouverture début 2023</p>
      </main>

      <footer className={styles.footer}>
        Servi par Johann et Julien Blatecky, et Creatiwity.
      </footer>
    </div>
  );
};

export default Home;
