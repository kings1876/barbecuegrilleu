'use client'

import { useState } from 'react'

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = openIndex === i
        return (
          <div className="faq-item" key={f.q}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {f.q}
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="faq-answer" id={`faq-panel-${i}`} role="region">
                {f.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
