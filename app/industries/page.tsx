export default function IndustriesPage() {
  const items = [
    { href: "/industries/transportation", label: "Transportation", desc: "Corridor mapping and asset monitoring." },
    { href: "/industries/renewable-energy", label: "Renewable Energy", desc: "Solar and wind inspections at scale." },
    { href: "/industries/mining", label: "Mining", desc: "Stockpile volumes and site planning." },
    { href: "/industries/utilities", label: "Utilities", desc: "Grid and substation inspections." },
    { href: "/industries/infrastructure", label: "Infrastructure", desc: "Bridges, roads, and construction progress." },
    { href: "/industries/agriculture", label: "Agriculture", desc: "Crop health and field analytics." },
    { href: "/industries/real-estate", label: "Real Estate", desc: "Property showcases and site surveys." },
    { href: "/industries/oil-and-gas", label: "Oil and Gas", desc: "Pipeline and facility inspections." },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-slate-500">Who we serve</p>
        <h1 className="text-3xl font-semibold">Industries</h1>
        <p className="text-slate-600">Domain expertise across sectors and environments.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="border rounded-xl p-4">
          <h3 className="font-medium">Domain Expertise</h3>
          <p className="text-slate-600">Practices refined across regulated environments.</p>
        </div>
        <div className="border rounded-xl p-4">
          <h3 className="font-medium">Scalable Delivery</h3>
          <p className="text-slate-600">From single sites to portfolios.</p>
        </div>
        <div className="border rounded-xl p-4">
          <h3 className="font-medium">Interoperability</h3>
          <p className="text-slate-600">Exports for GIS, BIM, and analytics.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <a key={it.href} className="border rounded-xl p-4 hover:shadow" href={it.href}>
            <h3 className="font-medium">{it.label}</h3>
            <p className="text-slate-600">{it.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}


