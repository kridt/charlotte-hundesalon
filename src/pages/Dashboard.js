import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductSum from "../components/ProductSum";
import { auth, database } from "../firebase";

export default function Dashboard() {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  function dataBase() {
    database
      .collection("products")
      .add({
        name: "product 3",
        price: 512,
        description: "123123123 323123 bla",
        id: 312135,
      })
      .then((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    database
      .collection("products")
      .get()
      .then((e) => setAllProducts(e.docs));
  }, []);

  console.log(allProducts);

  function signOut() {
    auth.signOut();
    navigate("/admin");
  }

  return (
    <div>
      <h1>dashboard</h1>

      <div>
        <p>Du er logget ind med {user?.email}</p>
      </div>
      <button type="submit" onClick={() => signOut()}>
        Log ud
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => dataBase()}>create</button>
      <h3>Der er i alt {allProducts.length} produkter på siden</h3>
      <div>
        {allProducts?.map((e) => {
          console.log(e.data());

          return <ProductSum productId={e.id} />;
        })}
      </div>
    </div>
  );
}
