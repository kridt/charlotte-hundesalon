import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";

export default function ProductSum({ productId }) {
  const uid = productId;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  console.log(uid);

  function deleteProduct() {
    window.confirm(`Er du sikker på du vil slette` + product.name)
      ? database
          .collection("products")
          .doc(uid)
          .delete()
          .then((e) => {
            console.log(e);
            window.location.reload();
          })
      : console.log(false);
  }

  useEffect(() => {
    database
      .collection("products")
      .doc(uid)
      .get()
      .then((e) => {
        setProduct(e.data());
      });
  }, []);

  return (
    <div>
      <h2>{product?.name}</h2>

      <button onClick={() => deleteProduct()}>Slet produkt</button>
    </div>
  );
}
