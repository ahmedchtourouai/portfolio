"use client"

import { motion } from 'framer-motion'

export default function Contact(){
  const email = 'ahmedchtourou.ai@gmail.com'
  const phone = '+216 22263340'
  const linkedin = 'https://www.linkedin.com/in/ahmed-chtourou-933b43222/'
  const siteUrl = 'https://ahmedchtourouai.github.io/portfolio/'

  return (
    <section id="contact" className="mt-12">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="mt-6 glass p-6 rounded-lg max-w-2xl">
        <form action={`https://formsubmit.co/${email}`} method="POST" className="space-y-4">
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={siteUrl} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <input required name="name" placeholder="Your name" className="w-full p-3 bg-transparent border rounded" />
          <input required name="email" type="email" placeholder="Email" className="w-full p-3 bg-transparent border rounded" />
          <textarea required name="message" placeholder="Message" className="w-full p-3 bg-transparent border rounded h-32" />
          <button className="px-4 py-2 bg-indigo-600 rounded">Send</button>
        </form>
        <div className="mt-6 text-sm text-indigo-200/80">
          <p><strong>Email:</strong> <a href={`mailto:${email}`} className="underline">{email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${phone}`} className="underline">{phone}</a></p>
          <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noreferrer" className="underline">{linkedin}</a></p>
        </div>
      </motion.div>
    </section>
  )
}
