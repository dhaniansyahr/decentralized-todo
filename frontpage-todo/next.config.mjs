/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/features",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
