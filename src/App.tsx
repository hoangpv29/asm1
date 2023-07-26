// import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <List />
        <Cart />
      </main>
    </div>
  );
};

export default App;
