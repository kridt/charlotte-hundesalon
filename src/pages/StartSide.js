import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { database } from "../firebase";

export default function StartSide() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    database
      .collection("products")
      .get()
      .then((e) => {
        setProducts(e.docs);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Start side</h1>
      <div>
        <img
          width={"100%"}
          src="/storHundeTrimPote.png"
          alt="stor img pote timning"
        />
      </div>

      <div className="product_line">
        <h2>Produkter</h2>
        <div
          style={{
            display: "flex",
            overflowX: "scroll",
            paddingLeft: "3em",
          }}
        >
          {products?.map((e) => {
            console.log(e);
            return <ProductCard productId={e.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
