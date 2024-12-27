
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md">
      <ul className="flex justify-around">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
