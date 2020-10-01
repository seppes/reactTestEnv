import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
            flex: 1;
            font-weight: lighter;
            `;

function ProductNote(props) {
    return <Note note={props.note} className={"productNote"}/>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <StyledDiv className="productLine">
            <StyledDiv>
                {product.name}
                {product.size && <span className="productSize">  • {product.size}CL</span>}
            </StyledDiv>
            <StyledDiv>{product.price}&euro;</StyledDiv>
        </StyledDiv>
        <ProductNote note={product.note}/>
    </>;
}