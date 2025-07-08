
function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <p className="text-[#d4af37] font-semibold mb-4 text-lg">
        Crafting Excellence with Precision
      </p>

      <p className="max-w-3xl text-gray-300 leading-relaxed text-sm sm:text-base mb-10">
        MH Enterprises specializes in CNC crafts and models, offering high-quality designs in 
        <span className="text-white font-medium"> MDF, PVC, ACP, Corean, and Stone</span>. With a keen focus on precision and creativity,
        we bring your ideas to life through premium 2D and 3D CNC designs.
        <br /><br />
        Whether you're working on interior decoration, signage, wall art, or any custom carving — we deliver
        perfection with timely service and attention to detail.
      </p>

      <div className="bg-[#1a1a1a] border border-[#d4af37] rounded-lg p-6 text-sm sm:text-base text-gray-300 shadow-lg max-w-xl">
        <p className="mb-2"><span className="text-[#d4af37] font-semibold">Location:</span> Sector-4, Near Iteda Gol Chakkar, Opp. Eco Village II, Greater Noida West</p>
        <p className="mb-2"><span className="text-[#d4af37] font-semibold">Contact:</span> 8920162722, 8287041178</p>
        <p><span className="text-[#d4af37] font-semibold">Years of Experience:</span> 15+ years in CNC Craftsmanship</p>
      </div>
    </div>
  );
}

export default About;
