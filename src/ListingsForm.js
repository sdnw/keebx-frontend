import React, { useState } from "react";
import './listingForm.css'

function ListingsForm({ handleAddListing }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name: name, price: price, image: image, description: description };

    fetch("/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
      .then(res => res.json())
      .then((data) => {
        console.log("new item added");
        handleAddListing(data)
      });
  };

  return (
    // <div className="group">
    //   <form className="form-group" onSubmit={handleSubmit}>
    //     <h2> Create Item Form </h2>
    //     <div className="form">
    //       <label>Name </label>
    //       <input
    //         type="text"
    //         required
    //         value={name}
    //         style={{ height: 25, width: 250 }}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>
    //     <div className="form">
    //       <label>Price </label>
    //       <input
    //         type="text"
    //         required
    //         value={price}
    //         style={{ height: 25, width: 250 }}
    //         onChange={(e) => setPrice(e.target.value)}
    //       />
    //     </div>
    //     <div className="form">
    //       <label>Image </label>
    //       <input
    //         type="text"
    //         required
    //         value={image}
    //         style={{ height: 25, width: 250 }}
    //         onChange={(e) => setImage(e.target.value)}
    //       />
    //     </div>
    //     <div className="form">
    //       <label>Description </label>
    //       <textarea
    //         required
    //         value={description}
    //         style={{ height: 40, width: 250 }}
    //         onChange={(e) => setDescription(e.target.value)}
    //       ></textarea>
    //     </div>
    //     <button type="submit" onClick={handleSubmit} className="btn-primary">
    //       {" "}
    //       Add Item!{" "}
    //     </button>
    //   </form>
    // </div>
    <div className="listingFormContainer">
    <form onSubmit={handleSubmit}>
      <h1 style={{ margin: 0, textAlign: "center", marginBottom: 25 }}>
        Create Item Form
      </h1>
      <div className="listingFormView">
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: 5 }}>
            <label>Name</label>
          </div>
          <div className="inputViewForn">
            <input
              type="text"
              required
              value={name}
              placeholder="Name"
              className="inputStyle"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: 5 }}>
            <label>Price</label>
          </div>
          <div className="inputViewForn">
            <input
              type="text"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              className="inputStyle"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: 5 }}>
            <label>Image</label>
          </div>
          <div className="inputViewForn">
            <input
              type="file"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="inputStyle"
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: 5 }}>
            <label>Description</label>
          </div>
          <textarea
            className="textAreaStyle"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="loginBtnViewForm">
          <button className="loginBtnForm">Add Item</button>
        </div>
      </div>
    </form>
  </div>
  );
}

export default ListingsForm;