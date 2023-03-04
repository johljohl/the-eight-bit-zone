import React, { useState } from "react";
import Modal from "./Modal";

// A functional component that displays search results for a product.
const SearchResult = (props) => {
  // Destructuring is used to extract the product object and addToShoppingCart function from props.
  const { product, addToShoppingCart } = props;
  // State is used to track whether or not the modal should be displayed.
  const [showModal, setShowModal] = useState(false);

  // Event handlers for the "Add to cart" and "More information" buttons.
  const addToCartClick = () => {
    addToShoppingCart();
  };
  const showModalClick = () => {
    setShowModal(true);
  };
  const closeModalClick = () => {
    setShowModal(false);
  };

  // Renders a card that displays information about the product.
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price} kr</p>
      <button onClick={addToCartClick}>Add to cart</button>
      <button onClick={showModalClick}>More information</button>
      {/* Renders a Modal component if showModal is true. */}
      {showModal && <Modal product={product} closeModal={closeModalClick} />}
    </div>
  );
};

// Exports the SearchResult component to be used in other parts of the application.
export default SearchResult;
