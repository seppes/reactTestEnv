import React from "react";
import styled from "@emotion/styled";

const StyledCategorNote = styled.div`
color: #a21212;
font-size: smaller;
`;

/** @return {null} */
export function Note(props) {
    const {note, className} = props;
    if (!note) return null;
    return <StyledCategorNote className={`note ${className}`}>{note}</StyledCategorNote>
}