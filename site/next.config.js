/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dharun Krishna',
    description: "The official registry for Dharun's workspaces.",
    icon: 'https://kbdharun.dev/kasm-workspaces-registry/1.0/image.png',
    listUrl: 'https://kbdharun.dev/kasm-workspaces-registry/',
    contactUrl: 'https://github.com/kbdharun/kasm-images/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-workspaces-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
