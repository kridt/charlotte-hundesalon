import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebase";

export default function ProductCard({ productId }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    database
      .collection("products")
      .doc(productId)
      .get()
      .then((e) => {
        setProduct(e.data());
      });
  }, [productId]);

  return (
    <Link
      style={{
        maxWidth: "200px",
        color: "black",
        textDecoration: "none",
        marginRight: "3em",
      }}
      to={"/productSite/" + productId}
    >
      <div>
        <img src={product?.img?.small} alt="img" />
      </div>
      <div>
        <h3>{product?.name}</h3>
        <h4>{product?.price} kr</h4>
      </div>
    </Link>
  );
}
