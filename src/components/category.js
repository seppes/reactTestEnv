import React from "react";
import {Note} from "./note";

function CategoryNote(props) {
    return <Note note={props.note} className={"categoryNote"}/>;
}

export function Category(props) {
    const {category} = props;
    return <div>
        <h1>{category.name}</h1>
        <CategoryNote note={category.note}/>
        {props.children}
    </div>;
}