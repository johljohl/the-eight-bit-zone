import React from "react";

// A functional component that renders a modal with product information.
const Modal = (props) => {
  // Destructuring is used to extract the product object and closeModal function from props.
  const { product, closeModal } = props;
  // Destructuring is also used to extract specific properties from the product object, such as name, description, price, image, and about.
  const { name, description, price, image, about } = product;
  // Renders a modal component that displays information about the product.
  return (
    <div className="modal">
      <div className="modal-content">
        <img className="modal-image" src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Pris: {price} kr</p>
        <p>{about}</p>
        <button className="close-button" onClick={closeModal}>
          Stäng
        </button>
      </div>
    </div>
  );
};

// Exports the Modal component to be used in other parts of the application.
export default Modal;
