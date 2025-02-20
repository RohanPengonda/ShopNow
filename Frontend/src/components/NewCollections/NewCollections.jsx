// import React from "react";
import "./NewCollections.css";
// import new_collection from "../assets/new_collections";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);

  return (
    <div className="newcollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
