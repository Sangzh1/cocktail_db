import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-xl pt-8 pb-8">
      <div className="max-container flex items-center">
        <Link className='mr-auto' to="/">
          <span className="text-2xl text-lime-800 font-bold">TheCocktailDB</span>
        </Link>
        <nav className="flex gap-6">
          <Link className=" font-semibold text-xl hover:text-lime-700" to='/'>Home</Link>
          <Link className=" font-semibold text-xl hover:text-lime-700" to='/about'>About</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
