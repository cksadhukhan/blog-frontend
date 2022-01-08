/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/page/1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
