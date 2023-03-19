import React from "react";

type Props = {
    className: string,
    title: string
}

export const Header= ({className, title}: Props) => {
    return (
        <header>
            <h1 className={className}>{title}</h1>
        </header>
    )
}