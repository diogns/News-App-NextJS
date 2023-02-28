/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      'c.biztoc.com',
      'img.ilgcdn.com',
      'imgs.hipertextual.com',
      'www.marketscreener.com',
      'wp-assets.futurism.com',
      's.yimg.com',
      'www.rawstory.com',
      'i0.wp.com',
      '**',
      'img',
      'img.olhardigital.com.br',
      'images.barrons.com',
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
  }
}

module.exports = nextConfig
