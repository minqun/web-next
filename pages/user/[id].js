
/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-02 11:24:33
 * @FilePath: /my-app/pages/user/[id].js
 */
import Head from 'next/head';
import Image from 'next/image';
import variables from '@/styles/variables.module.scss';
import styles from '@/styles/Home.module.scss';
import {useRouter} from 'next/router';
import Layout from '@/components/layout/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Script from 'next/script';
import Link from 'next/link';

export async function getServerSideProps (context) {
  const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`);
  let info = await res.json () || {};
  console.log(context.req, 'context.req getcookie')
  if (!(info && info.data)) {
    return {
      notFound: true,
    }
  }
  info.params = context.params;

  return {
    props: {...info, ...(await serverSideTranslations(context.locale, ['common']))}, // will be passed to the page component as props
  };
}
export default function Posts (props) {
  const router = useRouter ();
  const {t} = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>post</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    

        <Layout t={t}>
        <main className={styles.main_content}>
        <button onClick={() => router.push('/')}>
      User
    </button>

        {props && props.data && <ul >
            {props.data.map (post => (
              <li key={post.params.id}>
                <Link href={`/posts/${post.params.id}`}>
                  <a>{post.params.id}</a>
                </Link>
              </li>
            ))}
          </ul>}
          {props && props.params && String (props.params.id)}
          {process.env.NEXT_PUBLIC_ENV}
          {process.env.NEXT_PUBLIC_ENV_TEST}
          </main>
        </Layout>
      
    </div>
  );
}
