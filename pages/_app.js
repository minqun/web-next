/*
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-02 09:51:59
 * @FilePath: /my-app/pages/_app.js
 */
import '../styles/globals.scss'
import Head from 'next/head'
import { appWithTranslation } from "next-i18next";
// 项目
function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
