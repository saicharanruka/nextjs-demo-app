import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	// experimental: {
	//   ppr: 'incremental'
	// }
};

export default nextConfig;
