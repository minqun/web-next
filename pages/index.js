/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-02 15:59:06
 * @FilePath: /uuspy-website-node/pages/index.js
 */
import Head from 'next/head';
import Image from 'next/image';
import variables from '../styles/variables.module.scss';
import styles from '../styles/Home.module.scss';
import React, {useEffect,useState} from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';

export async function getStaticProps (context) {
  const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`);
  const data = await res.json ();
  data.favicon = '/favicon.ico';
  data.title = 'Create Next App1 ';
  return {
    
    props: {...data,...(await serverSideTranslations(context.locale, ['common'])),locale: context.locale}, // will be passed to the page component as props
  };
}
export default function Home (data) {
  const {t, i18n} = useTranslation('common')
  const router = useRouter ();
  const [locale, setLocale] = useState(data.locale)
  useEffect(() => {
  }, [ locale ])
  const handleChangeLanguage = () => {
    console.log('document.body', data.locale)
    if (data.locale == 'zh') {
     window.location.href ='/en'
    } else {
      window.location.href ='/zh'
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href={data.favicon} />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome<button onClick={handleChangeLanguage}>{locale}</button>
          {t('footer.end')}
        </h1>

        <Link href="/posts">
          <a>路由1</a>
        </Link>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
