module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "https://teamdh.org"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/index.html",
        permanent: false,
      },
    ];
  },
};
