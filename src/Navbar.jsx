import {Link} from "react-router-dom";

function Navbar(){
    

    return(
        <div className="sm:flex bg-[#d4af37] gap-9 w-full sm:h-11 text-center pt-2  sm:justify-center pb-2" >
            <div>
                <Link to='/' className='hover:text-white hover:border-white transition-all duration-300 border-b-2 border-black sm:border-none' >Home</Link>
            </div>
            <div>
                <Link to='/about' className='hover:text-white hover:border-white transition-all duration-300 border-b-2 border-black sm:border-none' >About Us</Link>
            </div>
            <div>
                <Link to='/services' className='hover:text-white hover:border-white transition-all duration-300 border-b-2 border-black sm:border-none'>Services</Link>
            </div>
            <div>
                <Link to='/designs' className='hover:text-white hover:border-white transition-all duration-300 border-b-2 border-black sm:border-none'>Designs</Link>
            </div>
            <div>
                <Link to='/contact' className='hover:text-white hover:border-white transition-all duration-300 border-b-2 border-black sm:border-none'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar;