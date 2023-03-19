import React from "react";

type Props = {
    className: string,
    children?: React.ReactNode
}

export const DashboardSection = ({className, children}: Props) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}