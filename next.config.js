/** @type {import('next').NextConfig} */
const path = require('path')
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  debug: process.env.NODE_ENV == 'development',
  reactStrictMode: true,
  distDir: "next",
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  webpack: (config) => {
    config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
    };
    config.resolve.alias["@"] = path.resolve(__dirname);
    // config.resolve.alias["@@"] = path.resolve(__dirname, "./components");
    // config.resolve.alias["@home"] = path.resolve(
    //     __dirname,
    //     "./components/home"
    // );
    config.resolve.alias["@images"] = path.resolve(
        __dirname,
        "./public/images"
    );
    return config;
},
}

module.exports = nextConfig
