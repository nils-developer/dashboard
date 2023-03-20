import React from "react";

type Props = {
    type: "button" | "submit" | "reset",
    text: string
}

export const Button = ({type, text}: Props) => {
    return (
        <button type={type}>{text}</button>
    )
}