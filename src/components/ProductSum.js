import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebase";

export default function ProductSum({ productId }) {
  const uid = productId;
  const [product, setProduct] = useState({});

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
    database
      .collection("products")
      .doc(uid)
      .get()
      .then((e) => {
        setProduct(e.data());
      });
  }, [uid]);

  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.price} Kr</p>
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "2em" }}>Lagerstatus: {product?.lager}</p>
        <Link to={"/changeStock/" + uid}>
          Klik her for at ændre lagerstatus
        </Link>
      </div>
      <button onClick={() => deleteProduct()}>Slet produkt</button>
    </div>
  );
}
