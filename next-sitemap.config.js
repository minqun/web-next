/*
 * @Date: 2022-09-02 10:25:32
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-02 15:17:10
 * @FilePath: /my-app/next-sitemap.config.js
 */
module.exports = {

  siteUrl: process.env.NEXT_PUBLIC_URL,
  generateRobotsTxt: true,
  sitemapSize: 2000,
  sourceDir: "next",
  changefreq: 'weekly',
  autoLastmod: false,
  exclude: [
    "/check",
    "/server-sitemap-index.xml"
  ],

  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_URL,
      hreflang: 'en',
    },
    {
      href: process.env.NEXT_PUBLIC_URL,
      hreflang: 'zh',
    },
  ],
}
