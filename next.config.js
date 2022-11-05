/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: false,
  env: {
    app_url: process.env.NEXT_APP_URL,
    server: process.env.NEXT_PUBLIC_API_HOST,

  },
  images: {
    domains: [

      'localhost',
      'localhost:3000'


    ],
  },

}

module.exports = nextConfig
