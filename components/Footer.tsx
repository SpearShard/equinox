"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const linkClass = "text-slate-600 hover:text-slate-900";

  return (
    <footer
      className="bg-slate-50  border-t border-slate-200  bg-no-repeat"
      style={{ backgroundImage: `url('https://equinoxsdrones.com/wp-content/uploads/2023/07/footer-svg-background-banner1200.svg')`, backgroundSize: 'contain' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-14 grid gap-12 md:grid-cols-3">
        {/* Left: About + Social + Subscribe */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
            src="/try1.svg"
            alt="Equinox Drones Logo"
            width={40}
            height={40}
            />
            <div className="font-semibold text-slate-900">Mechzilla Technologies</div>
          </div>
          <p className="text-sm leading-6 text-slate-600 max-w-md">
            We are a team of GIS experts, pilots, and engineers using drones to
            solve real‑world problems.
          </p>

          <div className="flex items-center gap-3">
            <Link href="#" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600">
              <Youtube className="w-4 h-4" />
            </Link>
            <Link href="mailto:info@equinoxsdrones.com" aria-label="Email" className="w-9 h-9 grid place-items-center rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-600">
              <Mail className="w-4 h-4" />
            </Link>
          </div>

          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <label className="block text-sm font-medium text-slate-700">Enter your email address to subscribe</label>
            <div className="flex gap-2">
              <input type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button className="shrink-0 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Subscribe</button>
            </div>
          </form>
        </div>

        {/* Middle: Navigation Links */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">Navigation Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link className={linkClass} href="/">Home</Link></li>
            <li><Link className={linkClass} href="/services/surveying-mapping">Surveying / Mapping</Link></li>
            <li><Link className={linkClass} href="/services/aerial-inspection-analysis">Aerial Inspection</Link></li>
            <li><Link className={linkClass} href="/services/creative-aerial-content">Creative Content</Link></li>
            <li><Link className={linkClass} href="/industries/renewable-energy">Wind Energy</Link></li>
            <li><Link className={linkClass} href="/industries/renewable-energy">Solar Energy</Link></li>
            <li><Link className={linkClass} href="/industries/infrastructure">Highways & Railways</Link></li>
            <li><Link className={linkClass} href="/industries/mining">Mining</Link></li>
            <li><Link className={linkClass} href="/industries/agriculture">Agriculture</Link></li>
            <li><Link className={linkClass} href="#">Urban Planning</Link></li>
            <li><Link className={linkClass} href="#">Construction Monitoring</Link></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Contact information</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500" />
                <p>
                  {/* Equinox&apos;s Drones Pvt Ltd<br />
                  Building No- 1314, 1st, 3rd & 4th Floor, Paramahansa Yogananda Rd,<br />
                  above Imperial Restaurant, Eshwara Layout, Indiranagar,<br />
                  Bengaluru, Karnataka 560038 */}
                  Bengaluru, Karnataka
                </p>
              </div>
              {/* <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <Link href="mailto:info@equinoxsdrones.com" className={linkClass}>info@equinoxsdrones.com</Link>
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Business Enquiries</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <Link href="mailto:business@equinoxsdrones.com" className={linkClass}>business@Mechzillatechnologies.com</Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <Link href="tel:+919990279996" className={linkClass}>+91 1234567890</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} <span className="font-medium text-slate-900">MechZilla Technologies</span> All Rights Reserved</p>
          {/* <div className="hidden sm:block text-slate-500">Powered by Next.js</div> */}
        </div>
      </div>
    </footer>
  );
}


