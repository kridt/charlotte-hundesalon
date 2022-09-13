import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";

export default function ProductSum({ productId }) {
  const uid = productId;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function deleteProduct() {
    window.confirm(`Er du sikker på du vil slette` + product.name)
      ? database
          .collection("products")
          .doc(uid)
          .delete()
          .then((e) => {
            window.location.reload();
          })
      : console.log(false);
  }

  useEffect(() => {
    setLoading(true);
    database
      .collection("products")
      .doc(uid)
      .get()
      .then((e) => {
        setProduct(e.data());
        setLoading(false);
        console.log(e.data());
      });
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>{product?.name}</h2>

      <button onClick={() => deleteProduct()}>Slet produkt</button>
    </div>
  );
}
