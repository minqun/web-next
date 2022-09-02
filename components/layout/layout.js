/*
 * @Date: 2022-08-30 14:30:25
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-01 11:12:01
 * @FilePath: /my-app/components/layout/layout.js
 */
import React from "react";
import BaseHeader from '@/components/header/header'
import BaseFooter from '@/components/footer/footer'
const  Layout = (props) => {
  return (<>
    <BaseHeader {...props}></BaseHeader>
    {props.children}
    <BaseFooter {...props}></BaseFooter>
    </>)
}
export default Layout
