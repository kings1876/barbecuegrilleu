const isStatic = process.env.TARGET === 'static'

export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  images: isStatic
    ? { unoptimized: true }
    : {
        formats: ['image/avif', 'image/webp'],
        // Placeholder catalog images ship as SVG until real product photography is provided.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'inline',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
}
