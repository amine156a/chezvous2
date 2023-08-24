import React, { useState } from "react";
import { Link } from "react-router-dom";

import {

  AiOutlineSearch,

} from "react-icons/ai";

import { useSelector } from "react-redux";


const Header2 = () => {

  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm  top-0 left-0 z-10" : null
        }
        w-full h-[50px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >

           <div className=" padding1 w-[95%] relative">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border1 h-[40px] w-full px-2  border-[#fff] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

</div>




 </>



);
};
export default Header2;
