import Image from 'next/image'

const isStatic = process.env.TARGET === 'static'

export default function SmartImage({ src, alt, priority = false, fill = true, width, height, className }) {
  if (isStatic) {
    return (
      <picture>
        <img
          src={`/images/${src}`}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          width={width || 1600}
          height={height || 1200}
          className={className}
        />
      </picture>
    )
  }
  if (fill) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }} className={className}>
        <Image
          src={`/images/${src}`}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
        />
      </div>
    )
  }
  return (
    <Image
      src={`/images/${src}`}
      alt={alt}
      width={width || 1600}
      height={height || 1200}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      className={className}
    />
  )
}
