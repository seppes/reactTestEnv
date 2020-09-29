import React from 'react';
import './App.css';
import {Category} from "./components/category";
import {SubCategory} from "./components/subcategory";

function ProductLine(props) {
    const {product, prijs} = props;

    return <div className="productLine">
        <div>{product.name}</div>
        <div>{product.price}&euro;</div>
    </div>;
}

const PRODUCTS_DATA = [
    {
        name: "drank",
        subcategorie: [
            {
                name: "fris",
                products: [
                    {id: "0", name: "cola", price: 2},
                    {id: "1", name: "water", price: 2},
                ],
            },
            {
                name: "alcohol",
                products: [
                    {id: "2", name: "bier", price: 2,},
                    {id: "4", name: "wijn", price: 4}
                ],
            }]
    },
    {
        name: "eten",
        subcategorie: [
            {
                name: "hapjes",
                products: [
                    {id: "5", name: "chips", price: 1},
                    {id: "6", name: "olijven", price: 2},
                    {id: "7", name: "kaas", price: 4},
                    {id: "8", name: "salami", price: 3},
                ]
            },
            {
                name: "warm",
                products: [
                    {id: "9", name: "hamburger", price: 4},
                    {id: "10", name: "pizza", price: 4}
                ]
            }
        ]
    }
];

function App() {
    return (
        <div>
            <h1>Menu</h1>
            {PRODUCTS_DATA.map((c) =>
                <Category key={c.name} category={c}>
                    {c.subcategorie.map((s) =>
                        <SubCategory key={s.name} subcategory={s}>
                            {s.products.map((p) =>
                                <ProductLine key={p.id} product={p}/>)}
                        </SubCategory>)}
                </Category>)}
        </div>
    );
}

export default App;
