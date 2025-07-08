import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
    
      <h1 className="text-6xl sm:text-5xl font-bold mb-4 tracking-wider">
        MH ENTERPRISES
      </h1>
      <p className="text-lg sm:text-xl text-[#d4af37] mb-1 font-semibold">
        CNC CRAFTS N MODELS
      </p>
      <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl">
        MDF, PVC, ACP, Corean & Stone Cutting | 2D & 3D Designs | Premium Quality CNC Work
      </p>

      <Link to="/contact">
        <button className="bg-[#d4af37] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300">
          Contact Us
        </button>
      </Link>

      <p className="mt-10 text-gray-400 text-xs sm:text-sm">
        Serving Quality | Precision | Excellence — Greater Noida West
      </p>
    </div>
  );
}

export default Home;
