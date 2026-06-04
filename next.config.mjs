import os from 'os';

const interfaces = os.networkInterfaces();
let networkIp = '0.0.0.0';
for (const name of Object.keys(interfaces)) {
  for (const info of interfaces[name]) {
    if (info.family === 'IPv4' && !info.internal) {
      networkIp = info.address;
      break;
    }
  }
}

// Print the IP clearly 2 seconds after Next.js starts up
setTimeout(() => {
  console.log(`\n\x1b[36m=============================================\x1b[0m`);
  console.log(`\x1b[36m📱 USE THIS LINK ON YOUR PHONE:\x1b[0m`);
  console.log(`\x1b[32m👉 \x1b[1mhttp://${networkIp}:3000\x1b[0m`);
  console.log(`\x1b[36m=============================================\x1b[0m\n`);
}, 2000);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
