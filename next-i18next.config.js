/*
 * @Date: 2022-08-31 15:04:54
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-02 09:38:13
 * @FilePath: /my-app/next-i18next.config.js
 */
const path = require("path");

module.exports = {
    i18n: {
        locales: ["en", "zh"],
        defaultLocale: "en",
        localeDetection: false,
        reloadOnPrerender: process.env.NODE_ENV == 'development',
        debug: false,
        shallowRender: true, // 您可以将shallowRender: true传递到配置选项中，以避免在调用changeLanguage方法时触发getInitialProps。
        localePath: path.resolve("public/locales"),
       
    }
};
