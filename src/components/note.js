import React from "react";

/** @return {null} */
export function Note(props) {
    const {note, className} = props;
    if (!note) return null;
    return <div className={`note ${className}`}>{note}</div>
}