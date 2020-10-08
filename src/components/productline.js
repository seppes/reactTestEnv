import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
            display:flex;
            flex-direction: row;
            & div {
            //flex: 1;
            font-weight: lighter;
            }
            `;

const StyledProductSize = styled.div`
            color : ${(props) => props.isActive ? "green" : "black"};
            font-size: 0.6em;
            & div {
            flex: 1;}
            `;
const StyledProductPrice = styled.div`
            flex: 2;
            text-align: right;
            `;

function ProductNote(props) {
    return <Note note={props.note} className={"productNote"}/>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <StyledProductLine className="productLine">
            <StyledProductLine>
                {product.name}
                {product.size && <StyledProductSize className="productSize"> • {product.size}CL</StyledProductSize>}
            </StyledProductLine>
            <StyledProductPrice>{product.price}&euro;</StyledProductPrice>
        </StyledProductLine>
        <ProductNote note={product.note}/>
    </>;
}