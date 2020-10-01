import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
            font-size: 16px;
            `;

function ProductNote(props) {
    return <Note note={props.note} className={"productNote"}/>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <StyledDiv className="productLine">
            <div>
                {product.name}
                {product.size && <span className="productSize">  • {product.size}CL</span>}
            </div>
            <div>{product.price}&euro;</div>
        </StyledDiv>
        <ProductNote note={product.note}/>
    </>;
}