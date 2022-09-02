/*
 * @Date: 2022-08-30 14:33:22
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-01 11:24:21
 * @FilePath: /my-app/components/header/header.js
 */
/*
 * @Date: 2022-08-30 14:30:25
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-30 14:33:15
 * @FilePath: /my-app/components/layout.js
 */
import React from "react";
import Styles from './header.module.scss'
const Header = (props) => {
  const {t} = props
  return <header className={Styles.header_content}>头部{t('footer.end')}</header>
}
export default Header
