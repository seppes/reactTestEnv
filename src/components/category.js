import React from "react";
import {Note} from "./note";
import styled from "@emotion/styled";

function CategoryNote(props) {
    return <Note note={props.note} className={"categoryNote"}/>;
}
const StyledH1 = styled.h1`
            border-top: solid thin;
            paddig-top: 16px;
            `;

const StyledCategorNote = styled.div`
 padding: 0 0 0.5em 0;
`;

export function Category(props) {
    const {category} = props;
    return <StyledCategorNote>
        <StyledH1>{category.name}</StyledH1>
        <CategoryNote note={category.note}/>
        {props.children}
    </StyledCategorNote>;
}