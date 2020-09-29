import React from "react";
import {Note} from "./note";

function ProductNote(props) {
    return <Note note={props.note} className={"productNote"}/>;
}

export function ProductLine(props) {
    const {product} = props;
    return <>
        <div className="productLine">
            <div>
                {product.name}
                {product.size && <span className="productSize">  • {product.size}CL</span>}
            </div>
            <div>{product.price}&euro;</div>
        </div>
        <ProductNote note={product.note}/>
    </>;
}