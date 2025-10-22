"use client";

import Link from "next/link";
import { Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thanks! We will reach out shortly.");
  }

  return (
    <div className="bg-white  mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Contact Sales</h1>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#038BD5]">Contact Sales</h2>
          </div>
          <div>
            <label htmlFor="name" className="block text-xs font-semibold tracking-wide text-slate-600">NAME</label>
            <input id="name" name="name" required className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold tracking-wide text-slate-600">SUBJECT</label>
            <input id="subject" name="subject" className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold tracking-wide text-slate-600">PHONE</label>
            <input id="phone" name="phone" required className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-slate-600">EMAIL</label>
            <input id="email" name="email" type="email" required className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold tracking-wide text-slate-600">MESSAGE</label>
            <textarea id="message" name="message" rows={6} className="mt-2 w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <button type="submit" className="w-full rounded-md bg-[#0079C0] py-3 text-white font-semibold hover:bg-[#038BD5]">SEND MESSAGE</button>
        </form>

        {/* Sidebar */}
        <aside>
          <h2 className="text-2xl font-semibold text-slate-900">Other ways to connect</h2>
          <p className="text-slate-600 mt-2">By call, mail or visit our office in person to discuss fruther.</p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="text-slate-800 font-medium mb-2">Call Us right away:</div>
              <Link href="tel:+919990279996" className="inline-flex items-center gap-3 rounded-md bg-[#038BD5] text-white px-5 py-3">
                <Phone className="w-4 h-4" />
                +919990279996
              </Link>
            </div>

            <div>
              <div className="text-slate-800 font-medium mb-2">Or Drop us an Email</div>
              <Link href="mailto:business@equinoxsdrones.com" className="inline-flex items-center gap-3 rounded-md bg-[#038BD5] text-white px-5 py-3">
                <Mail className="w-4 h-4" />
                business@Mechzillatechnologies.com
              </Link>
            </div>

            <div>
              <div className="text-slate-800 font-medium mb-2">Visit our office</div>
              <div className="inline-flex items-center gap-3 rounded-md bg-[#038BD5] text-white px-5 py-3">
                <Building2 className="w-4 h-4" />
                MechzillaTechnologies, Bengaluru, Karnataka
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Social grid */}
      {/* <section className="mt-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#038BD5]">Equinox&apos;s Drones on Social</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
          <a href="https://www.facebook.com/equinoxsdrones" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-[#3b5998]/10 text-[#3b5998]">
              <span className="text-3xl font-bold">f</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">Facebook</div>
            <div className="text-slate-600 mt-2">/equinoxsdrones</div>
          </a>

          
          <a href="https://www.instagram.com/equinoxs_drones" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white">
              <span className="text-2xl font-semibold">IG</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">Instagram</div>
            <div className="text-slate-600 mt-2">/equinoxs_drones</div>
          </a>

          
          <a href="https://www.youtube.com/@equinoxsdrones" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-[#ff0000]/10 text-[#ff0000]">
              <span className="text-3xl font-black">▶</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">YouTube</div>
            <div className="text-slate-600 mt-2">/equinoxsdrones</div>
          </a>

          <a href="https://medium.com/@equinoxsdrones" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-black text-white">
              <span className="text-3xl font-serif">M</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">Medium</div>
            <div className="text-slate-600 mt-2">@equinoxsdrones</div>
          </a>

         
          <a href="https://www.linkedin.com/company/equinoxsdrones" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-[#0a66c2]/10 text-[#0a66c2]">
              <span className="text-3xl font-black">in</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">Linkedin</div>
            <div className="text-slate-600 mt-2">/equinoxsdrones</div>
          </a>

         
          <a href="https://www.quora.com/profile/Equinoxs-Drones-1" target="_blank" className="rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-white p-8 text-center">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-[#b92b27]/10 text-[#b92b27]">
              <span className="text-3xl font-serif">Q</span>
            </div>
            <div className="text-xl font-semibold text-slate-900">Quora</div>
            <div className="text-slate-600 mt-2">/equinoxs-drones-1</div>
          </a>
        </div>
      </section> */}

 
      {/* <section className="mt-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-indigo-900">
          Get Directions for Best Enterprise Drone Companies in Bangalore
        </h2>
        <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <iframe
            title="Equinox's Drones Location"
            src="https://www.google.com/maps?q=Equinox%27s%20Drones%20Bengaluru&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section> */}
    </div>
  );
}

