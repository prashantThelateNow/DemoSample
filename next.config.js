/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// const nextConfig = {
//   output: "export",
//   // distDir: "build" // Optional: Change the output directory `out` -> `build`
// };

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      
    };
  }

  return {
    output: "export",
    basePath: "/DemoSample"
  };
};

