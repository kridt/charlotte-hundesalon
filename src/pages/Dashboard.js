import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductSum from "../components/ProductSum";
import { auth, database } from "../firebase";

export default function Dashboard() {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    database
      .collection("products")
      .get()
      .then((e) => setAllProducts(e.docs));
  }, []);

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
      <Link to={"/addProduct"}>Tilføj et produkt</Link>
      <h3>Der er i alt {allProducts.length} produkter på siden</h3>
      <div>
        {allProducts?.map((e) => {
          return <ProductSum key={e.id} productId={e.id} />;
        })}
      </div>
    </div>
  );
}
