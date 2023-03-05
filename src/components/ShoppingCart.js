import React from "react";

const ShoppingCart = (props) => {
  // Destructure props to get removeFromCart and cartItems
  const { removeFromCart, cartItems } = props;

  // Event handler for removing a product from the shopping cart
  const removeFromCartClick = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to calculate the total cost of the shopping cart
  const total = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Render JSX code for the shopping cart
  return (
    <div>
      <h2>DIN KUNDVAGN</h2>
      {/* Show the text "Your cart is empty" if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Din kundvagn är tom</p>
      ) : (
        // Show a table with the shopping cart if there are items in the cart
        <>
          <table>
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Pris</th>
                <th>Antal</th>
                <th>Totalt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through each product in the shopping cart and show a table row for each product */}
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price} kr</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity} kr</td>
                  <td>
                    {/* Show a button to remove the product from the shopping cart */}
                    <button onClick={() => removeFromCartClick(item.id)}>
                      Ta bort
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Show the total cost of the shopping cart in the table footer */}
            <tfoot>
              <tr>
                <td colSpan="3">Totalt:</td>
                <td>{total()} kr</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
};
export default ShoppingCart;
