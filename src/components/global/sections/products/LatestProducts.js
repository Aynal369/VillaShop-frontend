import React from "react";
import ProductItem from "./ProductItem";
import useDatabase from "../../../../hook/useDatabase";

const LatestProducts = () => {
  const { products } = useDatabase();
  return (
    <section>
      <div className="container-fluid">
        <h3 className="mt-5">New Products</h3>
        <div className="row g-4 my-3">
          {products.slice(0, 8).map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
