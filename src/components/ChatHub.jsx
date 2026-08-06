'use client'

import { useState, useEffect } from 'react'
import { CHAT, SITE } from '@/config/site'

const LINK_TYPES = new Set(['whatsapp', 'telegram', 'messenger', 'signal', 'email', 'phone'])
const WIDGET_TYPES = new Set(['tawk', 'crisp', 'jivochat'])

function linkFor(channel) {
  switch (channel.type) {
    case 'whatsapp':
      return { href: `https://wa.me/${channel.value}`, label: 'WhatsApp', icon: '💬' }
    case 'telegram':
      return { href: `https://t.me/${channel.value.replace('@', '')}`, label: 'Telegram', icon: '✈️' }
    case 'messenger':
      return { href: `https://m.me/${channel.value}`, label: 'Messenger', icon: '📩' }
    case 'signal':
      return { href: channel.value, label: 'Signal', icon: '🔒' }
    case 'email':
      return { href: `mailto:${channel.value}`, label: 'Email', icon: '✉️' }
    case 'phone':
      return { href: `tel:${channel.value}`, label: 'Call', icon: '📞' }
    default:
      return null
  }
}

export default function ChatHub() {
  const [open, setOpen] = useState(false)
  const linkChannels = CHAT.channels.filter((c) => LINK_TYPES.has(c.type))
  const widget = CHAT.channels.find((c) => WIDGET_TYPES.has(c.type))
  const widgetPending = widget && widget.value.includes('PENDING')

  useEffect(() => {
    if (!widget || widgetPending) return
    const timer = setTimeout(() => {
      if (widget.type === 'tawk') {
        const [propertyId, widgetId] = widget.value.split('/')
        const s1 = document.createElement('script')
        s1.async = true
        s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
        s1.charset = 'UTF-8'
        s1.setAttribute('crossorigin', '*')
        document.body.appendChild(s1)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [widget, widgetPending])

  if (linkChannels.length === 0 && (!widget || widgetPending)) return null

  if (linkChannels.length === 1 && !widget) {
    const l = linkFor(linkChannels[0])
    if (!l) return null
    return (
      <a
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat via ${l.label}`}
        style={fabStyle}
      >
        {l.icon}
      </a>
    )
  }

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 200 }}>
      {open && (
        <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 12, boxShadow: 'var(--shadow-lg)', padding: 10, marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 200 }}>
          {linkChannels.map((c) => {
            const l = linkFor(c)
            if (!l) return null
            return (
              <a key={c.type} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, minHeight: 44 }}>
                <span>{l.icon}</span> {l.label}
              </a>
            )
          })}
          {(!widget || widgetPending) && linkChannels.length === 0 && (
            <span style={{ padding: 12, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Live chat coming soon — use Contact page
            </span>
          )}
        </div>
      )}
      <button aria-label="Open chat" onClick={() => setOpen(!open)} style={{ ...fabStyle, position: 'static' }}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}

const fabStyle = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  zIndex: 200,
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: 'var(--color-primary)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.4rem',
  border: 'none',
  cursor: 'pointer',
  boxShadow: 'var(--shadow-lg)',
}
