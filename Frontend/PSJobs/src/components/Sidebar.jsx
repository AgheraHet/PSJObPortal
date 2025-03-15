import React, { useState } from "react";
function Sidebar() {
  const [isRemote, setIsRemote] = useState(false);
  return (
    //<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

    <div className="md:col-span-1 bg-[#242424] p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-[#933DC9]">Filters</h2>
      <div className="mt-4">
        <h3 className="text-md font-medium">Job Type</h3>
        <ul className="space-y-2 mt-2">
          <li>
            <input type="checkbox" /> Full-time
          </li>
          <li>
            <input type="checkbox" /> Internship
          </li>
          <li>
            <input type="checkbox" /> Part-time
          </li>
          <li>
            <input type="checkbox" /> Freelance
          </li>
        </ul>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span>Open to Remote</span>

        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="hidden"
            checked={isRemote}
            onChange={() => setIsRemote(!isRemote)}
          />
          <label
            htmlFor="toggle"
            className="block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                isRemote ? "translate-x-4" : ""
              } transition duration-300`}
            ></div>
          </label>
        </div>
      </div>
    </div>
    //</div>
  );
}

export default Sidebar;
