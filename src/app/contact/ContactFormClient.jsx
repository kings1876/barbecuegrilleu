'use client'

import WebForm from '@/components/WebForm'

export default function ContactFormClient() {
  return (
    <WebForm subject="New Contact Form Submission — Barbecue Grill Co." redirectTo="/thank-you-contact/" submitLabel="Send Message">
      {({ syncReplyTo }) => (
        <>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required onChange={syncReplyTo} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </>
      )}
    </WebForm>
  )
}
