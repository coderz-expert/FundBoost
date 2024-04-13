/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  images: {
    domains:  ['ipfs.infura.io', 'th.bing.com', 'crowdfunding.infura-ipfs.io','picsum.photos']
   },
  experimental: {
    esmExternals: false,
}
};
export default nextConfig;
