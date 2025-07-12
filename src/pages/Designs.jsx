import React from 'react';

function Designs() {
  
  const images = [
    "design1.jpg",
    "design2.jpg",
    "design3.jpg",
    "design4.jpg",
    "design5.jpg",
    "design6.jpg"
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Our Designs</h1>

      <p className="text-[#d4af37] text-lg font-semibold mb-10">
        Explore our premium CNC designs
      </p>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-[#d4af37] shadow-md">
            <img
              src={`/images/designs/${img}`} // Store images in public/images/designs/
              alt={`Design ${i + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <a href="/contact">
        <button className="mt-12 bg-[#d4af37] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300">
          Need a Custom Design?
        </button>
      </a>
    </div>
  );
}

export default Designs;
