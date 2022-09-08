import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

const MyItems = ({ deleteById, currentUser }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
   currentUser && _fetchItems();
  }, []);

  return (
    <>
      <article>
        <span>My Items</span>
        <ul className="cards">{_renderItems()}</ul>
      </article>
    </>
  );

  function _fetchItems() {
    fetch("/my_items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }
  function _renderItems() {
    const items = myItems.map((item) => (
      <ListingCard key={item.id} item={item} deleteById={deleteById} />
    ));
    return items;
  }
};

export default MyItems;
