import React from "react";
export default function Search() {
  return (
    <form classNameName="p-2">
      <div className="relative flex bg-gray-50 rounded-md">
        <input
          type="text"
          className="block w-full p-2 px-4 pl-10 text-sm text-gray-900 border border-gray-300
   "
          placeholder="Search Mockups, Logos..."
          required
        />
        <button className=" text-white bg-blue-500 p-2 ">Search</button>
      </div>
    </form>
  );
}

