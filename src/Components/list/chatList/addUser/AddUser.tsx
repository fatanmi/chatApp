import React, { useState } from "react";

function AddUser() {
  return (
    <div
      className="p-4 sm:p-6 md:p-8  rounded-lg absolute bg-[rgba(17,25,40,0.5)] 
               top-0 bottom-0 left-0 right-0 m-auto w-[400px] h-[200px]"
    >
      <form action="" className="flex justify-between gap-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="outline-none p-2 sm:p-4 md:p-6 border-0 focus:ring-2 focus:ring-slate-700 rounded-lg text-sm md:text-base lg:text-lg bg-white/90 text-black/70"
        />
        <button
          type="button"
          className="p-3 sm:p-4 md:p-6 bg-blue-600 hover:bg-blue-700 
                     text-white text-sm md:text-base lg:text-lg rounded-md transition-colors"
        >
          Search
        </button>
      </form>

      <div className="flex mt-4 justify-between items-center">
        <img
          src="/avatar.png"
          alt=""
          className="w-16 h-16 object-cover rounded-full border-2 border-white/50"
        />
        <h3 className="text-sm md:text-base lg:text-lg">John Doe</h3>
        <button
          className="p-3 bg-blue-600 hover:bg-blue-700 
                     text-white text-sm md:text-base lg:text-lg rounded-md transition-colors"
        >
          Add user
        </button>
      </div>
    </div>
  );
}

export default AddUser;
