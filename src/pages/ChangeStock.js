import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, database } from "../firebase";

export default function ChangeStock() {
  const id = useParams().id;
  const [currentProduct, setCurrentProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    database
      .collection("products")
      .doc(id)
      .get()
      .then((e) => {
        setCurrentProduct(e.data());
      });
  }, [id]);

  function changoInfo(e) {
    e.preventDefault();
    const name = e.target.title.value;
    const pris = e.target.price.value;
    const desc = e.target.desc.value;
    const lager = e.target.stock.value;

    database
      .collection("products")
      .doc(id)
      .update({
        description: desc,
        lager: parseInt(lager),
        price: parseInt(pris),
        name: name,
        lastEdited: `${"by " + auth.currentUser.email + " " + new Date()} `,
      })
      .then(() => {
        navigate("/dashboard");
      });
  }

  return (
    <div>
      <Link to={"/dashboard"}>Tilbage</Link>
      <h1>nuværende produkt info</h1>
      <form onSubmit={(e) => changoInfo(e)}>
        <div>
          <label htmlFor="title">produkt navn: </label>
          <input name="title" type="text" defaultValue={currentProduct.name} />
        </div>

        <div>
          <label htmlFor="price">produkt pris: </label>
          <input name="price" type="tex" defaultValue={currentProduct.price} />
        </div>

        <div>
          <label htmlFor="desc">produkt beskrivelse: </label>
          <input
            name="desc"
            type="text"
            defaultValue={currentProduct.description}
          />
        </div>

        <div>
          <label htmlFor="stock">produkt lagerstatus: </label>
          <input name="stock" type="tel" defaultValue={currentProduct.lager} />
        </div>
        <div>
          <input type="submit" value="Ændre" />
        </div>
      </form>
    </div>
  );
}
