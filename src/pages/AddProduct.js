import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../firebase";

export default function AddProduct() {
  const navigate = useNavigate();
  function addProduct(e) {
    e.preventDefault();
    const name = e.target.title.value;
    const price = parseInt(e.target.price.value);
    const desc = e.target.desc.value;
    const lager = e.target.lager.value;

    database
      .collection("products")
      .add({
        name: name,
        price: price,
        description: desc,
        lager: lager,
        user: auth.currentUser.email,
      })
      .then(() => {
        navigate("/dashboard");
      });
  }

  return (
    <div>
      <Link to={"/dashboard"}>Tilbage</Link>
      <h1>Add product</h1>

      <form onSubmit={(e) => addProduct(e)}>
        <div>
          <label htmlFor="titel">Produkt Navn: </label>
          <input required type="text" name="title" />
        </div>
        <div>
          <label htmlFor="Pris">Produkt pris: </label>
          <input required type="tel" name="price" />
        </div>
        <div>
          <label htmlFor="desc">En kort produkt beskrivelse </label>
          <input required type="text" name="desc" />
        </div>
        <div>
          <label htmlFor="desc">Nuværende lagerstatus </label>
          <input defaultValue={0} type="number" name="lager" />
        </div>

        <div>
          <input type="submit" value="Opret produkt" />
        </div>
      </form>
    </div>
  );
}
