import React from 'react';
import './App.css';

function ProductLine(props) {
    const {product, prijs} = props;

    return <div className="productLine">
        <div>{product.name}</div>
        <div>{product.price}&euro;</div>
    </div>;
}
const PRODUCTS_DATA = [
    {name: "cola", price: 2},
    {name: "water", price: 2},
    {name: "bier", price: 2},
    {name: "wijn", price: 4}
];
function App() {
    return (
        <div>
            <h1>Menu</h1>
            <ProductLine product={PRODUCTS_DATA[0]}/>
            <ProductLine product={PRODUCTS_DATA[1]}/>
            <ProductLine product={PRODUCTS_DATA[2]}/>
            <ProductLine product={PRODUCTS_DATA[3]}/>
        </div>
    );
}

export default App;
