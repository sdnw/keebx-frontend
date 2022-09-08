import React from "react";

function ListingCard({ item, deleteById, handleClick }) {


  function handleDelete(id) {
    fetch("http://localhost:6001/listings/" + id, {
      method: "DELETE"
    })
    deleteById(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">${item.price}</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>{item.location}</span>
        <div style={{display:"flex",justifyContent:"center",marginTop:10}}>

          <button onClick={() => handleClick(item)} className="emoji-button cart" style={{ backgroundColor: "lightblue", color: "white", width: "40%", padding: 10, borderRadius: 5 }}>Add to 🛒</button>
        </div>
      </div>
    </li>
  );
}

export default ListingCard;
