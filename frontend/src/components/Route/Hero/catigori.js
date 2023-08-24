import React, { useState } from "react";

function catigori(props) {
return (
    <>
    <div onClick={() => setDropDown(!dropDown)}>
<div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
  <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
  <button
    className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
  >
    Toutes catégories
  </button>
  <IoIosArrowDown
    size={20}
    className="absolute right-2 top-4 cursor-pointer"
    onClick={() => setDropDown(!dropDown)}
  />
  {dropDown ? (
    <DropDown
      categoriesData={categoriesData}
      setDropDown={setDropDown}
    />
  ) : null}
</div>
</div>
</>
)
  }
export default catigori;