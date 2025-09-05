"use client"

import { useState } from "react"

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  })

  return (
    <section className="max-w-6xl mx-4 md:mx-auto px-2 py-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-start mt-2">
      {/* Left: Heading & Info */}
      <div className="mt-2 md:mt-16 mb-0">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#204060] tracking-wide">CONTACT US</span>
        </div>
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#204060] mb-2 leading-tight">
          Have any queries? <br />
          <span className="text-[#204060]">Lets connect.</span>
        </h1>
      </div>
      {/* Right: Form */}
      <form className="bg-white rounded-xl shadow-md border-blue-100 border p-4 md:p-8 flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none text-xs md:text-sm"
              placeholder=""
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none text-xs md:text-sm"
              placeholder=""
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none text-xs md:text-sm"
              placeholder=""
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Institution</label>
            <input
              type="text"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none text-xs md:text-sm"
              placeholder=""
              value={form.institution}
              onChange={e => setForm({ ...form, institution: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full rounded-md bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none text-xs md:text-sm"
            rows={3}
            placeholder="Your message..."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-brand text-white font-semibold py-2 md:py-3 text-base md:text-lg shadow hover:bg-[#6C3483] transition"
        >
          Submit
        </button>
      </form>
    </section>
  )
}