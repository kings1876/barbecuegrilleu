const isStatic = process.env.TARGET === 'static'

export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    // The on-the-fly optimizer (Vercel target) intermittently returns a broken/undersized
    // result for some uploaded product photos (observed: a 1500x1500 source coming back as a
    // corrupt 320x320 image). Source files are already reasonably sized, so serve them as-is
    // rather than depend on the optimizer's reliability.
    unoptimized: true,
    // Placeholder catalog images ship as SVG until real product photography is provided.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
