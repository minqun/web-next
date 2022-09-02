/*
 * @Date: 2022-08-30 14:30:25
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-01 11:24:35
 * @FilePath: /my-app/components/footer/footer.js
 */
import React from "react";
import Styles from './footer.module.scss'
const Footer = (props) => {
   const {t} = props
   console.log(props, 'footer')
   return <footer className={Styles.footer_content }>底部{t('footer.end')}</footer>
}
export default Footer
