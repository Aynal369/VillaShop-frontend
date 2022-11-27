import React from "react";
import useDatabase from "../../hook/useDatabase";
import ProductItem from "../global/sections/products/ProductItem";

const Shop = () => {
  const { products } = useDatabase();
  return (
    <section>
      <div className="container-fluid">
        <h3 className="mt-5">New Products</h3>
        <div className="row g-4 mb-5">
          {products.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
