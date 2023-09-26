import React from "react";

type Props = {
    type: "button" | "submit" | "reset",
    text: string
}

export const Button = ({type, text}: Props) => {
    return (
        <button
            className="
                text-white rounded-md
                bg-emerald-500
                px-3 py-2
                ease-in-out
                duration-300
                shadow-md
                hover:bg-white hover:text-slate-800 hover:shadow-lg"
            type={type}
        >
            {text}
        </button>
    )
}