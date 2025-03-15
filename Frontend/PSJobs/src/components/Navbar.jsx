import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#242424] text-[#FBFAEE] flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Job Portal</h1>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="p-2 rounded-lg text-[#FBFAEE] w-full md:w-auto"
        />
        <FaSearch />
      </div>
    </nav>
  );
}

export default Navbar;
