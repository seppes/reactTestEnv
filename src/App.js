import React from 'react';
import './App.css';

function ProductLine(props) {
    const {product} = props;
    return <div>{product}{props.prijs}</div>;
}

function App() {
  return (
    <div>
        <h1>Menu</h1>
        <ProductLine product="cola" prijs={"1"}/>
        <ProductLine product="water" prijs={"2"}/>
        <ProductLine product="bier" prijs={"3"}/>
        <ProductLine product="wijn" prijs={"4"}/>
    </div>
  );
}

export default App;
