import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMsg('Sending…');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatusMsg('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatusMsg('❌ Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 bg-[#1a1a1a] border border-[#d4af37] rounded focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 bg-[#1a1a1a] border border-[#d4af37] rounded focus:outline-none"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="p-3 bg-[#1a1a1a] border border-[#d4af37] rounded focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-[#d4af37] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>

      {statusMsg && <p className="mt-4 text-sm text-gray-400">{statusMsg}</p>}

      <p className="mt-12 text-lg text-[#d4af37] font-semibold">Or connect with us directly:</p>
      <a
        href="https://wa.me/918287041178?text=Hi%20MH%20Enterprises%2C%20I%20am%20interested%20in%20your%20CNC%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

export default Contact;
