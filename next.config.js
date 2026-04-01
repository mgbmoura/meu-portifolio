/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the fix for the cross-origin request error
  allowedDevOrigins: ['3000-firebase-studio-1774744092442.cluster-ocv3ypmyqfbqysslgd7zlhmxek.cloudworkstations.dev'],
};

module.exports = nextConfig;
