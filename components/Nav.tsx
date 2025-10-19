"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ChevronDown({ open }: { open?: boolean }) {
  // We render a small chevron using borders and rotate it via inline style so
  // it can point down (closed) or up (open).
  const rotation = open ? 'rotate(225deg)' : 'rotate(45deg)';
  return (
    <span
      aria-hidden
      className="inline-block w-2.5 h-2.5 border-r-2 border-b-2 border-current mt-0.5 opacity-70"
      style={{ transform: rotation }}
    />
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const isServices = pathname.startsWith("/services");
  const isIndustries = pathname.startsWith("/industries");

  useEffect(() => {
    if (isServices) setOpenMenu("services");
    else if (isIndustries) setOpenMenu("industries");
    else setOpenMenu(null);
  }, [isServices, isIndustries]);

  // Close the open menu when clicking outside the nav.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const linkBase = "text-slate-600 hover:text-slate-900 rounded-lg px-2 py-2";
  const activeBase = "text-sky-600 bg-sky-50";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-4">
         
          <Link href="/" className="font-bold text-slate-900 flex items-center gap-2">
           <Image
                      src="/try1.svg"
                      alt="Equinox Drones Logo"
                      width={40}
                      height={40}
                      />
            Mechzilla technologies
          </Link>
          <div ref={navRef} className="flex items-center gap-3">
            {/* Mobile hamburger - visible on small screens */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>

            <nav className="hidden sm:flex items-center gap-3" aria-label="Primary">
            <Link href="/" className={`${linkBase} ${pathname === "/" ? activeBase : ""}`}>Home</Link>

            <div className="relative">
              {/* Services label: click toggles the dropdown; hover does nothing */}
              <button
                type="button"
                className={`${linkBase} ${isServices ? activeBase : ""} inline-flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={openMenu === "services"}
                onClick={() => setOpenMenu((v) => v === "services" ? null : "services")}
              >
                Services <ChevronDown open={openMenu === "services"} />
              </button>

              <div className={`${openMenu === "services" ? "block" : "hidden"} absolute left-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2`}>
                <Link href="/services/surveying-mapping" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Surveying/Mapping</Link>
                <Link href="/services/aerial-inspection-analysis" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Aerial Inspection & Analysis</Link>
                <Link href="/services/uav-data-processing" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">UAV Data Processing</Link>
                <Link href="/services/creative-aerial-content" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Creative Aerial Content</Link>
              </div>
            </div>

            <div className="relative">
              {/* Industries label: click toggles the dropdown; hover does nothing */}
              <button
                type="button"
                className={`${linkBase} ${isIndustries ? activeBase : ""} inline-flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={openMenu === "industries"}
                onClick={() => setOpenMenu((v) => v === "industries" ? null : "industries")}
              >
                Industries <ChevronDown open={openMenu === "industries"} />
              </button>

              <div className={`${openMenu === "industries" ? "block" : "hidden"} absolute left-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2`}>
                <Link href="/industries/transportation" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Transportation</Link>
                <Link href="/industries/renewable-energy" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Renewable Energy</Link>
                <Link href="/industries/mining" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Mining</Link>
                <Link href="/industries/utilities" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Utilities</Link>
                <Link href="/industries/infrastructure" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Infrastructure</Link>
                <Link href="/industries/agriculture" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Agriculture</Link>
                <Link href="/industries/real-estate" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Real Estate</Link>
                <Link href="/industries/oil-and-gas" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800">Oil and Gas</Link>
              </div>
            </div>

            <Link href="/about" className={`${linkBase} ${pathname === "/about" ? activeBase : ""}`}>About Us</Link>
            <Link href="/careers" className={`${linkBase} ${pathname === "/careers" ? activeBase : ""}`}>Careers</Link>
            <Link href="/contact" className={`${linkBase} ${pathname === "/contact" ? activeBase : ""}`}>Contact Us</Link>
            </nav>

            {/* Mobile menu panel */}
            <div id="mobile-menu" className={`${mobileOpen ? 'block' : 'hidden'} sm:hidden absolute inset-x-4 top-16 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-40 max-h-[calc(100vh-4rem)] overflow-auto`}>
              <div className="flex flex-col gap-2">
                <Link href="/" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-800">Home</Link>
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2 font-medium text-slate-800"
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>Services</span>
                    <span className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden>▾</span>
                  </button>
                  <div className={`${mobileServicesOpen ? 'block' : 'hidden'} pl-3 flex flex-col`}>
                    <Link href="/services/surveying-mapping" onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }} className="py-1 text-slate-700">Surveying/Mapping</Link>
                    <Link href="/services/aerial-inspection-analysis" onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }} className="py-1 text-slate-700">Aerial Inspection & Analysis</Link>
                    <Link href="/services/uav-data-processing" onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }} className="py-1 text-slate-700">UAV Data Processing</Link>
                    <Link href="/services/creative-aerial-content" onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }} className="py-1 text-slate-700">Creative Aerial Content</Link>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2 font-medium text-slate-800"
                    aria-expanded={mobileIndustriesOpen}
                  >
                    <span>Industries</span>
                    <span className={`transform transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} aria-hidden>▾</span>
                  </button>
                  <div className={`${mobileIndustriesOpen ? 'block' : 'hidden'} pl-3 flex flex-col`}>
                    <Link href="/industries/transportation" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Transportation</Link>
                    <Link href="/industries/renewable-energy" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Renewable Energy</Link>
                    <Link href="/industries/mining" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Mining</Link>
                    <Link href="/industries/utilities" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Utilities</Link>
                    <Link href="/industries/infrastructure" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Infrastructure</Link>
                    <Link href="/industries/agriculture" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Agriculture</Link>
                    <Link href="/industries/real-estate" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Real Estate</Link>
                    <Link href="/industries/oil-and-gas" onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }} className="py-1 text-slate-700">Oil and Gas</Link>
                  </div>
                </div>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-800">About Us</Link>
                <Link href="/careers" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-800">Careers</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-md text-slate-800">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


