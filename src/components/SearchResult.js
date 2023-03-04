import React, { useState } from "react";
import Modal from "./Modal";

const SearchResult = (props) => {
  const { product, addToCart } = props;
  const [showModal, setShowModal] = useState(false);

  const addToCartClick = () => {
    addToShoppingCart();
  };
  const showModalClick = () => {
    setShowModal(true);
  };
  const closeModalClick = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Pris {product.price} kr</p>
      <button onClick={addToCartClick}>Lägg till i kundvagn</button>
      <button onClick={showModalClick}>Mer information</button>
      {showModal && <Modal product={product} closeModal={closeModalClick} />}
    </div>
  );
};
export default SearchResult;
