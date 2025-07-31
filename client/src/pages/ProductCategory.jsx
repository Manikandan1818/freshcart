import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { categoryPath } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === categoryPath
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryPath
  );

  return (
    <div>
      {searchCategory && (
        <div>
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
