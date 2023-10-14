export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-accent font-logo text-3xl pt-1 font-semibold hover:cursor-pointer">
        <span className="">&lt;</span>/
        <span className="text-gray-200">RAHIM444</span>
        <span className="">&gt;</span>
      </h1>
      <ul className="flex gap-10 font-medium items-center hover:cursor-pointer">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <button className="bg-white text-gray-900 p-1 pr-3 pl-3 rounded-lg font-semibold border-2 hover:border-blue-950   hover:text-white hover:bg-gray-900">
          Download CV
        </button>
      </ul>
    </div>
  );
};
