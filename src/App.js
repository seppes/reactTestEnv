import React from 'react';
import {Category} from "./components/category";
import {SubCategory} from "./components/subcategory";
import {ProductLine} from "./components/productline";
import {PRODUCTS_DATA} from "./data/products_data";
import './App.css';
import styled from '@emotion/styled';

const StyledFixedNav = styled.h1`
    margin-left: 3vw;
    margin-right: 2vw;
    color: white;
    background-color: black;
    text-align: center;
`;

function App() {
    return (
        <div>

            <StyledFixedNav>Menu</StyledFixedNav>
            {PRODUCTS_DATA.map((c) =>
                <Category key={c.name} category={c}>
                    {c.subcategories.map((s) =>
                        <SubCategory key={s.name} subcategory={s}>
                            {s.products.map((p) =>
                                <ProductLine key={p.id} product={p}/>)}
                        </SubCategory>)}
                </Category>)}
        </div>
    )
}

export default App;
