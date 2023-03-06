import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";
import ShoppingBasket from "./components/ShoppingBasket";
import data from "./data/products.json";
import "./App.css";

const App = () => {
  // State for the items in the basket
  const [basketItems, setBasketItems] = useState([]);

  // State for showing search results
  const [showSearchResults, setShowSearchResults] = useState(false);

  // State for filtered products based on search query
  const [filteredProducts, setFilteredProducts] = useState(data);

  // Add a product to basket
  const addToBasketClick = (product) => {
    // Check if the product already exists in basket
    const matchingProduct = basketItems.find((item) => item.id === product.id);
    if (matchingProduct) {
      // If the product exists in basket, update its quantity
      setBasketItems(
        basketItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      // If the product doesn't exist in basket, add it to basket
      setBasketItems([...basketItems, { ...product }]);
    }
  };

  // Remove a product from basket
  const removeFromBasketClick = (productId) => {
    // Check if the product exists in basket
    const matchingProduct = basketItems.find((item) => item.id === productId);
    if (matchingProduct.quantity === 1) {
      // If the product quantity is 1, remove it from basket
      setBasketItems(basketItems.filter((item) => item.id !== productId));
    } else {
      // If the product quantity is greater than 1, decrement its quantity
      setBasketItems(
        basketItems.map((item) =>
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
    <div className="app-container">
      <div className="header-container">
        <h1 className="header">The 8-Bit Zone</h1>
        <SearchBox className="search-container" handleSearch={handleSearch} />
      </div>
      <div className="product-list">
        {showSearchResults &&
          filteredProducts.map((product) => (
            <SearchResult
              key={product.id}
              product={product}
              addToBasket={addToBasketClick}
            />
          ))}
      </div>
      <div className="cart-container">
        <div className="cart">
          <ShoppingBasket
            basketItems={basketItems}
            removeFromBasket={removeFromBasketClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
