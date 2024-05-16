/** @type {import('next').NextConfig} */

export const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'domainame.com',
        port: '',
				pathname: '/employees/**',
      },
    ],
  },
};

export default nextConfig;
