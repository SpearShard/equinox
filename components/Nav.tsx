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
  const navRef = useRef<HTMLElement | null>(null);

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
            Equinox Aviation
          </Link>
          <nav ref={navRef} className="hidden sm:flex items-center gap-3" aria-label="Primary">
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
        </div>
      </div>
    </header>
  );
}


