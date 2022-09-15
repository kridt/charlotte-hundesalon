import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { database } from "../firebase";

export default function ProductPage() {
  const id = useParams().id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    database
      .collection("products")
      .doc(id)
      .get()
      .then((e) => {
        setProduct(e.data());
      });
  }, [id]);

  console.log(product);

  return (
    <div>
      <Navbar />
      <h1>{product.name}</h1>
      <div style={{ width: "50vw" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={product?.img?.bigImg}
          alt=""
        />
      </div>
    </div>
  );
}
