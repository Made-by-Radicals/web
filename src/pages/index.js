import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Mady by Radicals | We're building crazy impactful products.</title>
                <meta charset='utf-8'></meta>
                <meta http-equiv='x-ua-compatible' content='ie=edge'></meta>

                <meta name='description' content="We're building crazy impactful products." />
                <meta name='author' content='Made by Radicals'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <article className={styles.fold}>
                    <div className={styles.hi}>Hi!</div>
                    <div className={styles.center}>
                        <div>
                            <h1 className={styles.headline + ' ' + inter.className}>
                                We're building <s className={styles.crazy}>crazy</s>&nbsp; impactful products.
                            </h1>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h5>Made by Radicals®</h5>
                    </div>
                </article>
                <article className={styles.background}></article>
                <article className={styles.contact}></article>
            </main>
        </>
    );
}
