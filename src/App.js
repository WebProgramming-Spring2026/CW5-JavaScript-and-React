import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import FilteredList from "./FilteredList.jsx";

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={" Sophie Nguyen"} />
        <h1>Counter</h1>
        <Counter />
        <h1>Filtered Produce List</h1>
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
