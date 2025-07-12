
function Services() {
  const services = [
    "MDF Cutting & Engraving",
    "PVC Sheet Designing",
    "ACP Panel Work",
    "Corean Sheet Crafting",
    "Stone Carving & Modeling",
    "2D & 3D CNC Designs",
    "Wall Panels & Murals",
    "Custom Interior Elements",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <p className="text-[#d4af37] text-lg font-semibold mb-8">
        Precision. Design. Craftsmanship.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-[#d4af37] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <p className="text-white font-medium">{service}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-400 max-w-xl">
        All services are handled with expert care, state-of-the-art machinery, and on-time delivery. 
        Contact us today to bring your ideas into stunning CNC-crafted reality.
      </p>

      <a href="/contact">
        <button className="mt-8 bg-[#d4af37] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300">
          Book a Service
        </button>
      </a>
    </div>
  );
}

export default Services;
