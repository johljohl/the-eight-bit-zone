const ShoppingBasket = (props) => {
  // Destructure props to get removeFromBasket and basketItems
  const { removeFromBasket, basketItems } = props;

  // Event handler for removing a product from the shopping basket
  const removeFromBasketClick = (itemId) => {
    removeFromBasket(itemId);
  };

  // Function to calculate the total cost of the shopping basket
  const total = () => {
    return basketItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Render JSX code for the shopping basket
  return (
    <div>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          WebkitTextStroke: "2px black",
        }}
      >
        DIN KUNDVAGN
      </h2>
      {/* Show the text "Din Kungvagn är tom" if the basket is empty */}
      {basketItems.length === 0 ? (
        <p
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "black",
            fontWeight: "bold",
          }}
        >
          Din kundvagn är tom
        </p>
      ) : (
        // Show a table with the shopping basket if there are items in the basket
        <>
          <table>
            <thead>
              <tr style={{ color: "white", backgroundColor: "black" }}>
                <th>Produkt</th>
                <th>Pris</th>
                <th>Antal</th>
                <th>Totalt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through each product in the shopping basket and show a table row for each product */}
              {basketItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price} kr</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity} kr</td>
                  <td>
                    {/* Show a button to remove the product from the shopping basket */}
                    <button onClick={() => removeFromBasketClick(item.id)}>
                      Ta bort
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Show the total cost of the shopping basket in the table footer */}
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
export default ShoppingBasket;
