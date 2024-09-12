// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Required for Tailwind CSS
    esmExternals: false,
    // Optional: Enables the built-in CSS support in Next.js
    css: true,
    // Optional: Enables the built-in SASS/SCSS support in Next.js
    sassOptions: {
      includePaths: ['./src'],
    },
  },
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }


    return config;
  },
};

export default nextConfig;