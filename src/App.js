import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";
import ShoppingCart from "./components/ShoppingCart";
import data from "./data/products.json";
import "./App.css";

const App = () => {
  // State for the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // State for showing search results
  const [showSearchResults, setShowSearchResults] = useState(false);

  // State for filtered products based on search query
  const [filteredProducts, setFilteredProducts] = useState(data);

  // Add a product to cart
  const addToCartClick = (product) => {
    // Check if the product already exists in cart
    const matchingProduct = cartItems.find((item) => item.id === product.id);
    if (matchingProduct) {
      // If the product exists in cart, update its quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      // If the product doesn't exist in cart, add it to cart
      setCartItems([...cartItems, { ...product }]);
    }
  };

  // Remove a product from cart
  const removeFromCartClick = (productId) => {
    // Check if the product exists in cart
    const matchingProduct = cartItems.find((item) => item.id === productId);
    if (matchingProduct.quantity === 1) {
      // If the product quantity is 1, remove it from cart
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      // If the product quantity is greater than 1, decrement its quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Handle search query entered by user
  const handleSearch = (searchQuery) => {
    // Filter products based on search query
    const filteredProducts = data.filter(
      (product) =>
        product.name
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        product.description
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        product.price
          .toString()
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
    );
    // Update filtered products and show search results
    setFilteredProducts(filteredProducts);
    setShowSearchResults(true);
  };

  return (
    <div>
      <h1>The 8-Bit Zone</h1>
      <SearchBox handleSearch={handleSearch} />
      <div>
        <div>
          {showSearchResults &&
            filteredProducts.map((product) => (
              <SearchResult
                key={product.id}
                product={product}
                addToCart={addToCartClick}
              />
            ))}
        </div>
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCartClick}
        />
      </div>
    </div>
  );
};

export default App;
