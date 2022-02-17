// Some examples of the rewrites we want
// /      -> /api/index
// /about -> /api/about

module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // Nextjs by default requires a /api prefix, let's remove that
        {
          source: "/:path*",
          destination: "/api/:path*",
        },
      ],
    }
  },
}
