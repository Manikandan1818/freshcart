import React from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const AllProducts = () => {
  const { products } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="mt-16 flex flex-col">
      <div>
        <p>All Products</p>
        <div></div>
      </div>
    </div>
  );
};

export default AllProducts;
