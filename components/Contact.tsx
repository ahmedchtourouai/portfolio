"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const email = 'ahmedchtourou.ai@gmail.com'
  const phone = '+216 22263340'
  const linkedin = 'https://www.linkedin.com/in/ahmed-chtourou-933b43222/'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Unable to send message')
      }

      form.reset()
      setSent(true)
    } catch {
      setError(`Message could not be sent. Please email me directly at ${email}.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="mt-12">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="mt-6 glass p-6 rounded-lg max-w-2xl">
        {sent ? (
          <p>Thanks, your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input required name="name" placeholder="Your name" className="w-full p-3 bg-transparent border rounded" />
            <input required name="email" type="email" placeholder="Email" className="w-full p-3 bg-transparent border rounded" />
            <textarea required name="message" placeholder="Message" className="w-full p-3 bg-transparent border rounded h-32" />
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <button disabled={sending} className="px-4 py-2 bg-indigo-600 rounded disabled:cursor-not-allowed disabled:opacity-60">
              {sending ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
        <div className="mt-6 text-sm text-indigo-200/80">
          <p><strong>Email:</strong> <a href={`mailto:${email}`} className="underline">{email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${phone}`} className="underline">{phone}</a></p>
          <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noreferrer" className="underline">{linkedin}</a></p>
        </div>
      </motion.div>
    </section>
  )
}
