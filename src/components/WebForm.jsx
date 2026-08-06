'use client'

import { useState, useRef } from 'react'
import { FORMS } from '@/config/site'

export default function WebForm({ subject, redirectTo, children, submitLabel = 'Submit' }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // null | 'sending' | 'error'
  const [errorMsg, setErrorMsg] = useState('')
  const keyPending = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')

  function onSubmit(e) {
    e.preventDefault()
    if (keyPending) {
      window.location.href = redirectTo
      return
    }
    setStatus('sending')
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(formRef.current),
    })
      .then((r) => r.json().then((data) => ({ status: r.status, data })))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          window.location.href = redirectTo
        } else {
          throw new Error((res.data && res.data.message) || 'Submission failed')
        }
      })
      .catch((err) => {
        setStatus('error')
        setErrorMsg(err.message || 'Something went wrong. Please try again or use the chat button.')
      })
  }

  function syncReplyTo(e) {
    const replyto = formRef.current?.querySelector('input[name="replyto"]')
    if (replyto) replyto.value = e.target.value
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="Barbecue Grill Co. Website" />
      <input type="hidden" name="replyto" value="" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {status === 'error' && (
        <div className="form-status error" role="alert">
          {errorMsg}
        </div>
      )}
      {keyPending && (
        <div className="form-status" style={{ background: '#fef3c7', color: '#92400e' }}>
          Form delivery is not yet configured — submitting will take you to the confirmation page, but the message will not be emailed until setup is complete.
        </div>
      )}

      {typeof children === 'function' ? children({ syncReplyTo }) : children}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
    </form>
  )
}
