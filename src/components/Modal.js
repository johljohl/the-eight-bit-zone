import React from "react";

const Modal = (props) => {
  const { product, closeModal } = props;
  const { name, description, price, image, about } = product;
  return (
    <div className="modal">
      <div className="modal-content">
        <img className="modal-image" src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Pris {price} kr</p>
        <p>{about}</p>
        <button className="close-button" onClick={closeModal}>
          Stäng
        </button>
      </div>
    </div>
  );
};

export default Modal;
