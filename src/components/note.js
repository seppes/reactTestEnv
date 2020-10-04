import React from "react";
import styled from "@emotion/styled";

const StyledNote = styled.div`
color: #a21212;
font-size: smaller;
`;

/** @return {null} */
export function Note(props) {
    const {note, className} = props;
    if (!note) return null;
    return <div className={`note ${className}`}>{note}</div>
}