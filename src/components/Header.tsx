import React from "react";

type Props = {
    title: string
}

export const Header= ({title}: Props) => {
    return (
        <header>
            <h1 className="text-5xl text-emerald-600 font-semi my-5">{title}</h1>
        </header>
    )
}