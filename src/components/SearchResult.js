import React, { useState } from "react";
import Modal from "./Modal";

// A functional component that displays search results for a product.
const SearchResult = (props) => {
  // Destructuring is used to extract the product object and addToShoppingBasket function from props.
  const { product, addToBasket } = props;
  // State is used to track whether or not the modal should be displayed.
  const [openModal, setOpenModal] = useState(false);

  // Event handlers for the "Add to basket" and "More information" buttons.
  const addToBasketClick = () => {
    addToBasket({ ...product, quantity: 1 });
  };
  const openModalClick = () => {
    setOpenModal(true);
  };
  const closeModalClick = () => {
    setOpenModal(false);
  };

  // Renders a table that displays information about the product.
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
            />
          </td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price} kr</td>
          <td>
            <button onClick={addToBasketClick}>Lägg till</button>
          </td>
          <td>
            <button onClick={openModalClick}>Mer information</button>
          </td>
        </tr>
      </tbody>
      {/* Renders a Modal component if openModal is true. */}
      {openModal && <Modal product={product} closeModal={closeModalClick} />}
    </table>
  );
};

// Exports the SearchResult component to be used in other parts of the application.
export default SearchResult;
