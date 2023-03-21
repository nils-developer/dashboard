import React from "react";

type Props = {
    type: "button" | "submit" | "reset",
    text: string
}

export const Button = ({type, text}: Props) => {
    return (
        <button
            className="border border-emerald-600 rounded-md bg-emerald-500 px-3 py-2 ease-in-out duration-300 hover:bg-emerald-200"
            type={type}
        >
            {text}
        </button>
    )
}