/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/BunsDev/novel",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/BunsDev/novel/issues",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/novel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
